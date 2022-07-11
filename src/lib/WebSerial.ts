import { fromEvent, merge, Subject, Observable, debounceTime, OperatorFunction, map, buffer, first, Subscription } from "rxjs";
import { delay, finalize, tap } from "rxjs/operators";
import { tapOnFirstEmit, fromWebSerial } from "@rxjs-ninja/rxjs-utility";
import { once } from "svelte/internal";
import './firmata/firmata'

class WebSerial {
  port: SerialPort
  endCtrl = new AbortController()
  decoder = new TextDecoder()
  encoder = new TextEncoder()
  serialObservable: Observable<Uint8Array>
  serialSubject: Subject<Uint8Array> = new Subject()
  isConnected$ = new Subject<boolean>()
  sendMessage$ = new Subject<Uint8Array>()
  interByteTimeout$ = new Subject<void>()
  responseReceived$ = new Subject<Array<number>>()

  

  async connect () {
    try {
      if(this.port) await this.port.close()
      this.port = await navigator.serial.requestPort();
      console.log(this.port.getInfo())
      this.serialObservable = fromWebSerial(this.port, this.sendMessage$, { baudRate: 57600 }, this.endCtrl.signal)
      
      this.serialObservable.pipe(
        tapOnFirstEmit(() => {
          this.isConnected$.next(true)
          console.log("Connected to Serial Device");
        }),
        finalize(() => {
          console.log("finalized");
        })
      ).subscribe(this.serialSubject);

      this.serialSubject.pipe(
        debounceTime(50) // byte interval
      ).subscribe(() => {
        this.interByteTimeout$.next()
      })

      this.serialSubject.pipe(
        buffer(this.interByteTimeout$),
      ).subscribe(received => {
        const numberArray = received.map(v => Array.from(v)).flat()
        this.responseReceived$.next(numberArray)
      })

      this.responseReceived$.subscribe((received) => {
        console.log(received.map(v => {
         return '0x' + v.toString(16).padStart(2, '0')
        }).join(", "))
      })
    } catch(e) {
      console.error(e)
    }
  }

  close () {
    this.endCtrl.abort()
    this.port.writable.getWriter().close();
    this.port.readable.getReader().cancel();
    this.port.close()
    this.serialObservable = undefined
  }

  async list() {
    console.log(await navigator.serial.getPorts())
  }
}

const ws = new WebSerial();
export default ws
