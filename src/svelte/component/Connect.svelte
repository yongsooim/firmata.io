<script lang='ts'>
  import webSerialPort from '../../lib/WebSerial';
  import { Firmata } from '../../lib/firmata/firmata';
  import { baudrateList } from '../../consts'
  import Select from './select';

  let selectedBaudrate = baudrateList[3];

  function updatebaudrate(baudrate: string) {
    selectedBaudrate = baudrate
  }

  async function connect() {
    await webSerialPort.connect('usb')
    let firmata = new Firmata(webSerialPort)
    console.log(firmata)

  }
</script>

<div class='wrapper'>
<a id = 'connectButton' class="nav-link" on:click={connect} href={"#"}>
  Connect
</a>
</div>

<div class = 'select-title'>Baudrate</div>
<div class = 'select-wrapper'>
  <Select id='boardselect' items={ baudrateList }  value={'57600'} selectType={'baudrate'} ></Select>
</div>

<style>
  .wrapper{
    background-color: grey;
    width: var(--sidebar-width);
  }
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

  .select-title {
    width: var(--sidebar-width);
    margin-right:0px;
    margin-left:16px;
    padding-top : 10px;
    padding-bottom : 0px;
  }
  .select-wrapper {
    text-align: center;
    width: var(--sidebar-width);
    padding-top: 5px;
    padding-bottom: 5px;
  }

</style>
