import Emitter from 'events'

export class WebSerialPort extends Emitter {
  
  port: SerialPort | undefined
  reader: ReadableStreamDefaultReader | undefined
  writer: WritableStreamDefaultWriter | undefined
  async connect (target? : 'usb' | 'serial'){
    try {
      if(target === undefined) {
        let device = await navigator.usb.requestDevice({ filters: [] })
        let ports = await navigator.serial.getPorts()
        for(let i = 0 ; i < ports.length ; i++) {
          const portInfo = ports[i].getInfo()
          if(portInfo.usbProductId === device.productId && portInfo.usbVendorId === device.vendorId) {
            this.port = ports[i]
            break
          }
          if(i === ports.length - 1) {
            console.log('no port found on selected usb')
            this.connect('serial')
          }
        }  
      } else {
        this.port = await navigator.serial.requestPort()
      }
        
        await this.port.open({ baudRate: 57600 });
        this.reader = this.port.readable.getReader();
        this.writer = this.port.writable.getWriter();
  
        while (this.port.readable) {
          try {
            while (true) {
              const { value, done } = await this.reader.read();
              if (done) {
                // |reader| has been canceled.
                break;
              }
              //this.dispatchEvent(new CustomEvent('data', {detail:value}));
              this.emit('data', value);
            }
          } catch (error) {
            // Handle |error|...
          } finally {
            this.reader.releaseLock();
          }
        }
    } catch(e) {
      if(e.message === 'No device selected.'){
        console.log('retry')
        this.connect('serial')
      }

    }
  }

  write(data: number[], callback) {
    if(!this.port) return
    this.writer.write(new Uint8Array(data));
    if(callback) callback()
  }

}

const webSerialPort = new WebSerialPort()
export default webSerialPort

