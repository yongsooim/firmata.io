<script lang="ts">
  import { Styles, Row, Col} from "sveltestrap";
  import firmata from "./Firmata";
  import ws from "./WebSerial";
  import {flash} from './Flash'
  
  let received = []
  ws.responseReceived$.subscribe(data => {
    received = [...received, data.toString()]
  });

</script>

<Styles />

<Row>
  <Col class='border'>
    sidebar
  </Col>

  <Col>
    <button class='btn btn-primary'  on:click={() => {ws.requestPort()}}>
      start
    </button>

    <button class='btn btn-primary' on:click={() => {firmata.toggleLed()
      ws.list()
      
    }} >
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
  </Col>
</Row>
