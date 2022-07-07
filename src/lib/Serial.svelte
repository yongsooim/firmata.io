<script lang="ts">
  import { fromEvent, merge, Subject, Subscription, interval, Observable } from "rxjs";
  import { delay, finalize, tap, buffer, filter, throttleTime, bufferTime, bufferCount, bufferWhen, debounceTime } from "rxjs/operators";
  import { tapOnFirstEmit, fromWebSerial } from "@rxjs-ninja/rxjs-utility";
  import { CommandByte, PinMode } from './Firmata'
  import { Styles, Button, Col, Row } from 'sveltestrap';
  import { onMount } from 'svelte';
  import './bufferDebounceTime'
  import bufferDebounceTime from "./bufferDebounceTime";
  
  let startButton : HTMLButtonElement;
  let writeButton : HTMLButtonElement;
  let resetButton : HTMLButtonElement;

  const sendButton = document.getElementById("send");
  const endButton = document.getElementById("cancel");
  // Emoji buttons append the Eomji to the text box
  const emojiButtons = document.querySelectorAll(".emoji");
  const controls = document.getElementById("controls");

  // The output of all the messages
  const output = document.getElementById("chat-output");

  // The Text input from the browser user
  const textInput = document.getElementById("chat-text") as HTMLInputElement;

  // Const the info panels
  const connectionInfo = document.getElementById("connection-info");
  const appInfo = document.getElementById("app-info");
  const appList = document.getElementById("app-list");

  // Emitter for our message from the input
  const sendMessage$ = new Subject<Uint8Array>();
  const bufferStart = new Subject<Uint8Array>();
  const receiveTimeout = new Subject<null>();
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();
  let serialSubscription : Subscription
  let serialObservable : Observable<Uint8Array>
  let endCtrl: AbortController;

  let port: SerialPort
  
  let toggle = 0

  onMount(async () => {
    fromEvent(startButton, "click")
    .pipe(
      tap(async () => {
        try {
          if(port) {
            serialSubscription.unsubscribe()
          }
          await startConnection();
        } catch (e) {
          // The prompt has been dismissed without selecting a device.
        }
      })
    )
    .subscribe();

    fromEvent(writeButton, "click")
    .pipe(
      tap(async () => {
        toggle ^= 1
        sendMessage$.next(new Uint8Array([0xf4, 13, 1, 0xf5, 13, toggle]))
        sendMessage$.next(new Uint8Array([0xf4, 13, 1, 0xf5, 13, toggle]))
        sendMessage$.next(new Uint8Array([0xd0, 1]))
        //sendMessage$.next(new Uint8Array([0xf5, 13, 1]));
      })
    )
    .subscribe()

    fromEvent(resetButton, "click")
    .subscribe(() => {
      resetArduino(port)
      sendMessage$.next(new Uint8Array([0x31]))

    })
  })
  
  async function startConnection() {
    endCtrl = new AbortController();
    port = await navigator.serial.requestPort();

    serialObservable = fromWebSerial(port, sendMessage$.asObservable(), { baudRate: 57600 }, endCtrl.signal)

    bufferStart.pipe(
      tap((values) => {
        console.log(values)
      })
    ).subscribe()

    serialSubscription = serialObservable.pipe(
      tapOnFirstEmit(async () => {
        console.log("Connected to Serial Device");
      }),
      bufferDebounceTime(50),
      tap((values) => {
        let merged = new Uint8Array(values.reduce((acc, cur) => [...acc, ...cur], []));

        console.log(decoder.decode(merged))
        console.log(Array.from(merged).map(v=>{
          return `0x${v.toString(16).padStart(2, '0').toUpperCase()}`
        }).join(', '))
      }),
      finalize(() => {
        console.log("finalized");
      })
    ).subscribe()
  }

  async function resetArduino(port: SerialPort) {
    await port.setSignals({ dataTerminalReady: false, requestToSend: false });
    await new Promise(resolve => setTimeout(resolve, 250));
    await port.setSignals({ dataTerminalReady: true, requestToSend: true });
  }



</script>
<Styles />

<Row>
  <Col class='border'>
    sidebar
  </Col>

  <Col>
    <button class='btn btn-primary' bind:this={startButton} >
      start
    </button>

    <button class='btn btn-primary' bind:this={writeButton} >
      toggle led
    </button>

    <button class='btn btn-primary' bind:this={resetButton} >
      reset
    </button>

  </Col>
</Row>