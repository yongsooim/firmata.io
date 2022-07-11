import mitt from 'mitt';


export class WebSerialReceiveEvent extends Event {
  data : Uint8Array
  constructor(type: string, data: Uint8Array) {
    super(type)
    this.data = data
  }
}


class WebSerial extends EventTarget {
  port: SerialPort | undefined;
  reader: ReadableStreamDefaultReader | undefined;
  writer: WritableStreamDefaultWriter | undefined;
  async connect () {
    try {
      if(this.port) {
        this.reader.releaseLock()
        this.reader.releaseLock()
        await this.port.close()
      }
      this.port = await navigator.serial.requestPort();
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
            this.dispatchEvent(new WebSerialReceiveEvent('data', value));
          }
        } catch (error) {
          // Handle |error|...
        } finally {
          reader.releaseLock();
        }
      }

    } catch(e) {
      console.error(e)
    }
  }

  write(data: number[]) {
    if(!this.port) return
    this.writer.write(new Uint8Array(data));
  }

}


const wsf = mitt();
wsf.on('*', () => {
  console.log('evetyu rbrny')
})

const ws = new WebSerial();
export default ws

