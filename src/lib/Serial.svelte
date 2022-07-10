<script lang="ts">
  import firmata from "./Firmata";
  import ws from "./WebSerial";
  import { flash } from "./Flash";
  import { Styles } from "sveltestrap";
import { onMount } from "svelte";
  
  let received = []
  ws.responseReceived$.subscribe(data => {
    received = [...received, data.toString()]
  });



  function startButtonClicked() {
    ws.requestPort();
  }

</script>
<Styles/>
<div>
  <div class='border'>
    <div id = 'tweakpane'></div>
  </div>

  <div>
    <button id='startButton' class='btn btn-primary'>
      start
    </button>

    <button id='toggleButton' class='btn btn-primary'>
      ws.list()
      toggle led
    </button>

    <button class='btn btn-primary' on:click={() => {firmata.readADC()}} >
      read AD
    </button>

    <button class='btn btn-primary' on:click={() => {firmata.reset()}} >
      reset
    </button>

    <button class='btn btn-primary' on:click={() => {ws.close()}} >
      close
    </button>

    
    <button class='btn btn-primary' on:click={() => {flash()}} >
      flash
    </button>


    <ul>
      {#each received as data}
        <li>
          {data}
        </li>
      {/each}  
    </ul>
  </div>
</div>
