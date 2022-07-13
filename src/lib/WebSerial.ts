import Emitter from 'events'

export class WebSerialPort extends Emitter {
  
  port: SerialPort | undefined
  reader: ReadableStreamDefaultReader | undefined
  writer: WritableStreamDefaultWriter | undefined
  async connect () {
    try {
      navigator.serial.requestPort().then(async (serialport) => {
        this.port = serialport
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
      });

    } catch(e) {
      console.error(e)
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

