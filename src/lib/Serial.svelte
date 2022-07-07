<script lang="ts">
  import { fromEvent, merge, Subject } from "rxjs";
  import { delay, finalize, tap } from "rxjs/operators";
  import { tapOnFirstEmit, fromWebSerial } from "@rxjs-ninja/rxjs-utility";

  import * as rxjs from "rxjs";
  import { Styles, Button, Col, Row } from 'sveltestrap';
  import { onMount } from 'svelte';
  
  let startButton : HTMLButtonElement;
  let writeButton : HTMLButtonElement;
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
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();
  let endCtrl: AbortController;

  let port: SerialPort
  

  onMount(async () => {

    fromEvent(startButton, "click")
    .pipe(
      tap(async () => {
        try {
          await startConnection();
        } catch (e) {
          // The prompt has been dismissed without selecting a device.
        }
      })
    )
    .subscribe();

    fromEvent(writeButton, "click")
    .pipe(
      tap(() => {
        console.log(encoder.encode(`sent`))
        sendMessage$.next(encoder.encode(`sent`));
      })
    )
    .subscribe()
  })
  
  async function startConnection() {
    endCtrl = new AbortController();


    port = await navigator.serial.requestPort();
    

    
    port.onconnect =  (event) => {
      console.log(event)
      resetArduino(port)
      console.log('?')
    }


    /**
     * Pass out port, input and signal for ending the connection
     */
    fromWebSerial(port, sendMessage$.asObservable(), { baudRate: 115200 }, endCtrl.signal)
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

  async function resetArduino(port: SerialPort) {
    await port.setSignals({ dataTerminalReady: false });
    await port.setSignals({ requestToSend: false });
    await new Promise(resolve => setTimeout(resolve, 250));
    await port.setSignals({ dataTerminalReady: true });
    await port.setSignals({ requestToSend: true });
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
      write
    </button>
  </Col>
</Row>