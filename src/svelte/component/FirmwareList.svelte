<script lang='ts'>
  import { selectedBoard, selectedHex } from "../stores";
  import { get } from "svelte/store";
  import Select from './select/index.js'

  export const firmwareList = [
  ["uno", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["mega", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["nano", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["pro-mini", ["Blink-3v.cpp", "StandardFirmata-3v.cpp"]],
  ["yun", ["StandardFirmata.cpp", "StandardFirmata.with_bootloader.cpp"]],
  ["imuduino", ["StandardFirmata.cpp", "StandardFirmata.with_bootloader.cpp"]],
  ["tinyduino", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["leonardo", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["circuit-playground-classic", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["arduboy", ["rund.cpp.leonardo"]],
  ["bqZum", ["Blink.cpp"]],
  ["duemilanove168", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["duemilanove328", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["esplora", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["feather", ["Blink.cpp"]],
  ["lilypad-usb", ["StandardFirmata.cpp", "Blink.cpp"]],
  ["pinoccio", ["StandardFirmata.cpp", "Blink.cpp", "Bootstrap.cpp"]],
  ["qduino", ["StandardFirmata.cpp", "rainbow.cpp"]],
  ["sf-pro-micro", ["StandardFirmata-5v.cpp", "Blink-5v.cpp"]],
  ]

  const boardList = firmwareList.map(v => v[0])


</script>

<div class = 'select-title'>Board</div>
<div class = 'select-wrapper'>
  <Select id='boardselect' items={ boardList }  value='uno' ></Select>
</div>

<style>

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
