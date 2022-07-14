<script lang='ts'>
  import { board$, path$ } from "../stores";
  import { get } from "svelte/store";

  const firmwareList = new Map<string, string[]>([
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
  ])

  const boardList = Array.from(firmwareList.keys())

  let selectedBoard = firmwareList.keys().next().value
  let firmwaresInSelectedBoard = firmwareList.get(selectedBoard)

  function updateBoard(board: string) {
    board$.set(board)
    updateFirmware(firmwareList.get(board)[0])
  }

  function updateFirmware(firmware: string) { 
    path$.set(`./static/hex/${selectedBoard}/${firmware}.hex`)
    console.log(get(path$))
  }

</script>

<div style='width=100%'>Board</div>
<select on:change={(e) => {updateBoard(e.currentTarget.value)}}>
  {#each boardList as board}
    <option value={board}>{board}</option>
  {/each}
</select>

<div style='width=100%'>Firmware</div>
<select on:change={(e) => {updateFirmware(e.currentTarget.value)}}>
  {#each firmwaresInSelectedBoard as file}
    <option>{file}</option>
  {/each}
</select>

<style>
  select {
    font-size: 23px;
    height: 30px;
    max-width: 100%;
    min-width: 100%;
  }
</style>
