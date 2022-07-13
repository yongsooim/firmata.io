<script lang='ts'>
  import webSerialPort from '../../lib/WebSerial';
  import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
  //import { Firmata } from '../../lib/firmata/firmata';

  let firmata
  import('../../lib/firmata/firmata').then(module => {
    firmata = module;
  })

  const baudrateList = [9600, 19200, 38400, 57600, 115200];
    let selectedBaudrate = baudrateList[0];

    function updatebaudrate(baudrate: number) {
      selectedBaudrate = baudrate
    }

    async function connect() {
      await webSerialPort.connect()
      import('../../lib/firmata/firmata').then(module => {
        new firmata.Firmata(webSerialPort)
      })
    }
</script>

<a class="nav-link" on:click={connect} href={"#"}>
  Connect
</a>

<div class="mb-3" >
  <Dropdown group size="lg"  >
    <DropdownToggle caret class = 'w-100' >{selectedBaudrate}</DropdownToggle>
    <DropdownMenu class= 'scrollable-menu'>
    {#each baudrateList as baudrate}
      <DropdownItem  active = {baudrate === selectedBaudrate} on:click={() => {updatebaudrate(baudrate)}} >
        {baudrate}
      </DropdownItem>
    {/each}
    </DropdownMenu>
  </Dropdown>
</div>
