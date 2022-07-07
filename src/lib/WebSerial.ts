import { fromEvent, merge, Subject } from "rxjs";
import { delay, finalize, tap } from "rxjs/operators";
import { tapOnFirstEmit, fromWebSerial } from "@rxjs-ninja/rxjs-utility";

import * as rxjs from "rxjs";
import { Styles, Button, Col, Row } from 'sveltestrap';
import { onMount } from 'svelte';


class WebSerial {

  port : SerialPort
  sendMessage$ = new Subject<Uint8Array>();
  endCtrl = new AbortController();

  async requestPort () {
    this.port = await navigator.serial.requestPort();

    fromWebSerial(this.port, this.sendMessage$.asObservable(), { baudRate: 57600 }, this.endCtrl.signal)
    .pipe(        
      tapOnFirstEmit(async () => {
        console.log("Connected to Serial Device");
      }),
      tap(value => {
        console.log(value + ' received')
      }),
      delay(1000),
      finalize(() => {
        console.log("finalized");
      })
    )
    .subscribe();
  }

}
