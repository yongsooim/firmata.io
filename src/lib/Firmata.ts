import ws from "./WebSerial";
import { first, tap } from "rxjs/operators";
import { CommandByte, ExtendedCommandByte, PinMode } from "./FirmataConstants";

declare type Digital = 0 | 1;

class Firmata {
  currentPinMode : Array<PinMode>
  currentDigitalWrite : Array<Digital>
  reportedDigitalRead : Array<Digital>

  constructor() {
    this.currentPinMode = new Array<PinMode>(50).fill(PinMode.PIN_MODE_INPUT)
    this.currentDigitalWrite = new Array<Digital>(50).fill(0)
    this.reportedDigitalRead = new Array<Digital>(50).fill(0)
    
  }

  toggleLed() {
    this.currentDigitalWrite[13] ^= 1
    ws.sendMessage$.next(new Uint8Array([CommandByte.SET_DIGITAL_PIN_VALUE, 13, this.currentDigitalWrite[13]]))
  }

  readADC() {
    ws.sendMessage$.next(new Uint8Array([CommandByte.DIGITAL_MESSAGE, 13, 1]))
  }

  digitalWrite(pin: number, value: Digital) {
    this.currentDigitalWrite[pin] = value
    ws.sendMessage$.next(new Uint8Array([CommandByte.SET_DIGITAL_PIN_VALUE, pin, value]))
  }

  digitalReport() {

  }

  async reset() {
    await ws.port.close()
    await ws.port.open({ baudRate: 115200 })
    await ws.port.setSignals({ dataTerminalReady: false, requestToSend: false })
    await new Promise((resolve) => setTimeout(resolve, 250))
    await ws.port.setSignals({ dataTerminalReady: true, requestToSend: true })
  }
}

const firmata = new Firmata()
export default firmata
