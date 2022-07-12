<script lang="ts">
  import {Firmata} from "../lib/firmata/firmata"
  import ws from "../lib/WebSerial"
  import { flash } from "../lib/Flash"
  import { Styles } from "sveltestrap"
  import { onMount } from "svelte"
  
  import { EventEmitter } from 'events'

  //let received = []
  //ws.responseReceived$.subscribe(data => {
  //  received = [...received, data.toString()]
  //  firmata.parse(data)
  //});
  let firmata: Firmata
  async function startButtonClicked() {
    await ws.connect()
    firmata = new Firmata(ws)
    console.log('?')
    firmata.on("ready", () => {
      console.log("ready")
    })
    //ws.dis('data', "test")
  }

</script>
<Styles/>
<div>
  <div class='border'>
    <div id = 'tweakpane'></div>
  </div>

  <div>
    <button id='startButton' class='btn btn-secondary lg' on:click="{startButtonClicked}">
      start
    </button>

    <button id='toggleButton' class='btn btn-secondary lg' on:click="{ ()=>{ 
        let ledLevel = firmata.pins[13].value ^ 1
        firmata.digitalWrite(13, ledLevel, false)
      } }">
      toggle led
    </button>

    <button class='btn btn-secondary lg' on:click={() => {firmata.queryFirmware((firmware)=>{
      console.log(firmware)
    })}} >
      queryFirmware
    </button>

    <button class='btn btn-secondary lg' on:click={() => {firmata.reportAnalogPin(0, 1)}} >
      report ad
    </button>

    <button class='btn btn-secondary lg' on:click={() => {firmata.reportAnalogPin(0, 0)}} >
      stop report ad
    </button>

    <button class='btn btn-secondary lg' on:click={() => {firmata.reportDigitalPin(0, 1)}} >
      report digital
    </button>

    <button class='btn btn-secondary lg' on:click={() => {firmata.reportDigitalPin(0, 0)}} >
      stop report digital
    </button>

    <button class='btn btn-secondary lg' on:click={() => {firmata.reportDigitalPin(0, 0)}} >
      stop report digital
    </button>
    
    <button class='btn btn-secondary lg' on:click={() => {firmata.reset()}} >
      reset
    </button>

    <button class='btn btn-secondary lg' on:click={() => {}} >
      close
    </button>
  
    <button class='btn btn-secondary lg' on:click={() => {flash()}} >
      Upload
    </button>

    <!--
    <ul>
      {#each received as data}
        <li>
          {data}
        </li>
      {/each}  
    </ul>
    -->
  </div>
</div>
