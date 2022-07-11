<script lang="ts">
  import firmata from "./Firmata";
  import ws, {WebSerialReceiveEvent} from "./WebSerial";
  import { flash } from "./Flash";
  import { Styles } from "sveltestrap";
  import { onMount } from "svelte";

  
  //let received = []
  //ws.responseReceived$.subscribe(data => {
  //  received = [...received, data.toString()]
  //  firmata.parse(data)
  //});

  async function startButtonClicked() {

    ws.connect();

    ws.addEventListener('data', (event:WebSerialReceiveEvent) => {
      console.log(event)
      firmata.receiveHandler(Array.from(event.data))
    });
    
    firmata.addEventListener('analog-read-0', (event:any) => {
      console.log(event)
    })
  }

</script>
<Styles/>
<div>
  <div class='border'>
    <div id = 'tweakpane'></div>
  </div>

  <div>
    <button id='startButton' class='btn btn-secondary' on:click="{startButtonClicked}">
      start
    </button>

    <button id='toggleButton' class='btn btn-secondary' on:click="{ ()=>{ firmata.toggleLed() } }">
      toggle led
    </button>

    <button class='btn btn-secondary' on:click={() => {firmata.queryFirmware()}} >
      queryFirmware
    </button>

    <button class='btn btn-secondary' on:click={() => {firmata.reportAnalogPin(0, 1)}} >
      report ad
    </button>

    <button class='btn btn-secondary' on:click={() => {firmata.reset()}} >
      reset
    </button>

    <button class='btn btn-secondary' on:click={() => {}} >
      close
    </button>
  
    <button class='btn btn-secondary' on:click={() => {flash()}} >
      flash
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
