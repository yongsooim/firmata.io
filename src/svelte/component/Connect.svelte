<script lang='ts'>
  import webSerialPort from '../../lib/WebSerial';
  import { Firmata } from '../../lib/firmata/firmata';

  const baudrateList = [9600, 19200, 38400, 57600, 115200];
    let selectedBaudrate = baudrateList[0];

    function updatebaudrate(baudrate: string) {
      selectedBaudrate = Number.parseInt(baudrate)
    }

    async function connect() {
      await webSerialPort.connect()
      let firmata = new Firmata(webSerialPort)
      console.log(firmata)

    }
</script>

<a id = 'connectButton' class="nav-link" on:click={connect} href={"#"}>
  Connect
</a>

<div style='width=100%'>Baudrate</div>
<select on:change={(e) => {updatebaudrate(e.currentTarget.value)}}>
  {#each baudrateList as baudrate}
    <option>{baudrate}</option>
  {/each}
</select>


<style>
  a:hover {
    background-color: #f5f5f5;
  }

  a {
    width:var(--sidebar-width);
  }

  p {
    margin: 0;
    padding: 0;
  }

  select {
    font-size: 23px;
    height: 30px;
    max-width: var(--sidebar-width);
    min-width: var(--sidebar-width);
  }

</style>
