import { fromEvent, merge, Subject, Observable, debounceTime, OperatorFunction, map, buffer, first } from "rxjs";
import { delay, finalize, tap } from "rxjs/operators";
import { tapOnFirstEmit, fromWebSerial } from "@rxjs-ninja/rxjs-utility";
import { once } from "svelte/internal";

class WebSerial {
  port: SerialPort
  serialObservable: Observable<Uint8Array>
  serialSubject: Subject<Uint8Array> = new Subject()
  isConnected$ = new Subject<boolean>()
  sendMessage$ = new Subject<Uint8Array>()
  interByteTimeout$ = new Subject<void>()
  responseReceived$ = new Subject<Array<number>>()

  endCtrl = new AbortController()
  decoder = new TextDecoder()
  encoder = new TextEncoder()

  async requestPort () {
    try {

      this.port = await navigator.serial.requestPort();
      
      this.serialObservable =fromWebSerial(this.port, this.sendMessage$, { baudRate: 57600 }, this.endCtrl.signal)
      
      this.serialObservable.pipe(
        tapOnFirstEmit(() => {
          this.isConnected$.next(true)
          console.log("Connected to Serial Device");
        }),
        //buffer(this.interByteTimeout$),
        //tap(received => {
        //  const numberArray = received.map(v => Array.from(v)).flat()
        //  console.log(numberArray.join(","))
        //  this.responseReceived$.next(numberArray)
        //}),
        finalize(() => {
          console.log("finalized");
        })
      ).subscribe(this.serialSubject);

      this.serialSubject.pipe(
        debounceTime(50)
      ).subscribe(() => {
        this.interByteTimeout$.next()
      })

      this.serialSubject.pipe(
        buffer(this.interByteTimeout$),
        tap(received => {
          const numberArray = received.map(v => Array.from(v)).flat()
          this.responseReceived$.next(numberArray)
        }),
      ).subscribe()

      this.responseReceived$.pipe().subscribe((received) => {
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

  }
}

const ws = new WebSerial();
export default ws
