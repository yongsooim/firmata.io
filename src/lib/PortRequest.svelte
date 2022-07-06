<script lang="ts">
  import ws from "./webserial";
  import * as rxjs from "rxjs";
  import { Styles, Button } from 'sveltestrap';

  let reader : ReadableStreamDefaultReader<Uint8Array>
  let writer : WritableStreamDefaultWriter<Uint8Array>
  let string = ''
  let arr = new Uint8Array()

  async function req() {
    try {
      let port = await navigator.serial.requestPort()

      console.log(port)
      await port.open({ baudRate: 115200 })
      ws.init(port)
    } catch (e) {
      console.error(e)    
    }
  }

  function write() {
    ws.write()
  }
  
</script>
<Styles />

<Button on:click={req}>
  Port Request
</Button>


<Button on:click={write}>
  Write
</Button>

<div>
  recived: {ws.string}
  
</div>
