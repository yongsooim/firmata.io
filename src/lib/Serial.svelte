<script lang="ts">
  import { Styles, Row, Col} from "sveltestrap";
  import firmata from "./Firmata";
  import ws from "./WebSerial";

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
    <button class='btn btn-primary' onclick={()=>{ws.requestPort()}} >
      start
    </button>

    <button class='btn btn-primary' onclick={()=>{firmata.toggleLed}} >
      toggle led
    </button>

    <button class='btn btn-primary' onclick={() => {firmata.reset()}} >
      reset
    </button>

    <button class='btn btn-primary' onclick={() => {ws.close()}} >
      close
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
