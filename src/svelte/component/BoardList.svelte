<script lang="ts" >
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
  import { board, path } from '../stores'

  const firmwareList = new Map<string, string[]>([
    ['uno', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['mega', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['nano', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['pro-mini', ['Blink-3v.cpp', 'StandardFirmata-3v.cpp']],
    ['yun', ['StandardFirmata.cpp', 'StandardFirmata.with_bootloader.cpp']],
    ['imuduino', ['StandardFirmata.cpp', 'StandardFirmata.with_bootloader.cpp']],
    ['tinyduino', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['leonardo', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['circuit-playground-classic', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['arduboy', ['rund.cpp.leonardo']],
    ['bqZum', ['Blink.cpp']],
    ['duemilanove168', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['duemilanove328', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['esplora', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['feather', ['Blink.cpp']],
    ['lilypad-usb', ['StandardFirmata.cpp', 'Blink.cpp']],
    ['pinoccio', ['StandardFirmata.cpp', 'Blink.cpp', 'Bootstrap.cpp']],
    ['qduino', ['StandardFirmata.cpp', 'rainbow.cpp']],
    ['sf-pro-micro', ['StandardFirmata-5v.cpp', 'Blink-5v.cpp']],

  ])
  
  const boards = [...firmwareList.keys()]

  let selectedBoard = boards[0]
  let selectedFirmware = firmwareList.get(selectedBoard)[0]
  let selectedFirmwarePath = `./static/hex/${selectedBoard}/${selectedFirmware}.hex`

  board.set(selectedBoard)
  path.set(selectedFirmwarePath)

  function updateBoard(board: string) {
    if(selectedBoard !== board) {
      selectedBoard = board
      selectedFirmware = firmwareList.get(board)[0]
    }
    updateFirmware(selectedFirmware)
  }

  function updateFirmware(firmware: string) {
    selectedFirmware = firmware
    selectedFirmwarePath = `./static/hex/${selectedBoard}/${selectedFirmware}.hex`

    path.set(selectedFirmwarePath)
  }

</script>

<br>
Board
<div class="mb-3" >
  <Dropdown group size="lg" class = 'w-100' >
    <DropdownToggle caret class = 'w-100' >{selectedBoard}</DropdownToggle>
    <DropdownMenu class= 'scrollable-menu'>
      {#each boards as board}
        <DropdownItem  active = {board === selectedBoard} on:click={() => {updateBoard(board)}} >
          {board}
        </DropdownItem>
      {/each}
    </DropdownMenu>
  </Dropdown>
</div>

Firmware
<div class="mb-3">
  <Dropdown group size="lg" class = 'w-100'>
    <DropdownToggle caret class = 'w-100'>{`${selectedFirmware}.hex`}</DropdownToggle>
    <DropdownMenu>
      {#each firmwareList.get(selectedBoard) as firmware}
        <DropdownItem active = {firmware === selectedFirmware} on:click={() => updateFirmware(firmware)} >
          {`${firmware}.hex`}
        </DropdownItem>
      {/each}
    </DropdownMenu>
  </Dropdown>
</div>

