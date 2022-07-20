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



<div class = 'select-title'>Select baudrate</div>
<div class = 'select-wrapper'>
  <Select id='boardselect' items={ baudrateList }  value={'57600'} selectType={'baudrate'} ></Select>
</div>

<div class='wrapper'>
  <button id = 'connectButton' on:click={connect}>
    ⇌ Connect
  </button>
  </div>

<style>
  #connectButton {
    width: var(--sidebar-width);
    border: 0px;
    height: var(--height);
    cursor: pointer;
    font-size: 20px;
  }
  #connectButton:hover {
    background-color: #71c6e0;
  }
  .wrapper{
    background-color: grey;
    width: var(--sidebar-width);
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
  }

</style>
