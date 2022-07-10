import ws from './WebSerial'
import { first, tap } from 'rxjs/operators'
import { CommandByte, ExtendedCommandByte, PinMode } from './FirmataConstants'

class Firmata {

    
    toggleLed() {
        ws.responseReceived$.pipe(
          first()  
        ).subscribe((value) => {
            let pinData = value[1] << 8 | value[0]

            let p13 = pinData >> 13 & 1
            ws.sendMessage$.next(new Uint8Array([CommandByte.SET_DIGITAL_PIN_VALUE, 13, p13 === 0 ? 1 : 0]));
        })
        ws.sendMessage$.next(new Uint8Array([CommandByte.REPORT_DIGITAL, 1]));

    }

    readADC() {

        ws.sendMessage$.next(new Uint8Array([CommandByte.DIGITAL_MESSAGE, 13, 1]));

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
