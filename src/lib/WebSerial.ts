import mitt from 'mitt';
import { EventEmitter } from 'events'

export class WebSerialPort extends EventEmitter {
  port: SerialPort | undefined
  reader: ReadableStreamDefaultReader | undefined
  writer: WritableStreamDefaultWriter | undefined

  encoder = new TextEncoder()
  decoder = new TextDecoder()
  
  async requestPort () {
    try {
      if(this.port) {
        this.reader.releaseLock()
        this.reader.releaseLock()
        await this.port.close()
        this.emit('close')
      }
      this.port = await navigator.serial.requestPort()
      await this.port.open({ baudRate: 57600 })
      this.emit('open')
      this.reader = this.port.readable.getReader()
      this.writer = this.port.writable.getWriter()
      

      while (this.port.readable) {
        try {
          while (true) {
            const { value, done } = await this.reader.read()
            if (done) {
              // |reader| has been canceled.
              break;
            }
            this.emit('data', value)
          }
        } catch (error) {
          // Handle |error|...
        } finally {
          this.reader.releaseLock()
        }
      }

    } catch(e) {
      console.error(e)
      this.emit(e)
    }
  }

  write(data: Uint8Array, callback?) {
    if(!this.port) return
    this.writer.write(data)
    if(callback) {
      callback()
    }
  }

  close() {
    if(!this.port) return
    this.reader.releaseLock()
    this.reader.releaseLock()
    this.port.close()
    this.emit('close')
  }
}

const Serialport = new WebSerialPort()
export default Serialport

