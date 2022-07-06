<script lang="ts">
  import ws from "./webserial";

  let reader : ReadableStreamDefaultReader<Uint8Array>
  let writer : WritableStreamDefaultWriter<Uint8Array>
  let string = ''
  let arr = new Uint8Array()

  async function req() {
    try {
      let port = await navigator.serial.requestPort()
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

<button on:click={req}>
  Port Request
</button>


<button on:click={write}>
  Write
</button>

<div>
  recived: {ws.string}
  
</div>

<style>
  button {
    width: 200px;
    height: 100px;
  }
</style>
