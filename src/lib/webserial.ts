
class WebSerial {
    portName: string
    baudRate: number
    writer: WritableStreamDefaultWriter<Uint8Array>
    reader: ReadableStreamDefaultReader<Uint8Array>
    buffer: Uint8Array
    string: string
    timeout? = 50
    timer: number
    delimiter: string
    isOpen = false
    port: SerialPort
    latestValue: number
    appendStream

    constructor(timeout = 50) {
        this.timeout = timeout
    }

    init(port: SerialPort): void {
      if(port) {
        this.writer = port.writable.getWriter()
        //this.reader = port.readable.getReader()
        this.port = port
        this.isOpen = true
        console.log('open')

        
      }
      
      //this.loop()
    }
    
    async loop() {
        try {
            while (true) {
              const { value, done } = await this.reader.read();
              if (done) {
                // |reader| has been canceled.
                this.string = ''
                break
              }
              console.log(value)
              this.string += value.toString()
            }
          } catch (error) {
            // Handle |error|...
          } finally {
            this.reader.releaseLock()
          }
    }

    async write () {
      if(this.isOpen) {
        await this.writer.write(new Uint8Array([1, 2, 3, 45, 6, 7, 8, 9, 0, 1, 2,3 , 4]))
        console.log('written')
      } else {
        console.log('not open')
      }
    }
}

const ws = new WebSerial()
export default ws
