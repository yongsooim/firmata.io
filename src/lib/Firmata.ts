import ws from './WebSerial'
import { CommandByte, ExtendedCommandByte, PinMode } from './FirmataConstants'

class Firmata {

    toggleLed(pin: number) {
        ws.sendMessage$.next(new Uint8Array([CommandByte.SET_DIGITAL_PIN_VALUE, pin, 1]));
    }

    async reset() {
        await ws.port.close()
        await ws.port.open({ baudRate: 115200 })
        await ws.port.setSignals({ dataTerminalReady: false, requestToSend: false });
        await new Promise(resolve => setTimeout(resolve, 250));
        await ws.port.setSignals({ dataTerminalReady: true, requestToSend: true });
    }
}

const firmata = new Firmata()
export default firmata
