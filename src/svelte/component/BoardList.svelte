<script lang="ts">
  import { onMount } from "svelte"
  import { get } from "svelte/store"
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap"
  import { board, path } from "../stores"

  const firmwareList = new Map<string, string[]>([
    ["uno", ["StandardFirmata.cpp", "Blink.cpp"]],
    ["mega", ["StandardFirmata.cpp", "Blink.cpp"]],
    ["nano", ["StandardFirmata.cpp", "Blink.cpp"]],
    ["pro-mini", ["Blink-3v.cpp", "StandardFirmata-3v.cpp"]],
    ["yun", ["StandardFirmata.cpp", "StandardFirmata.with_bootloader.cpp"]],
    [
      "imuduino",
      ["StandardFirmata.cpp", "StandardFirmata.with_bootloader.cpp"],
    ],
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

  const boards = [...firmwareList.keys()]

  let selectedBoard = boards[0]
  let selectedFirmware = firmwareList.get(selectedBoard)[0]
  let selectedFirmwarePath = `./static/hex/${selectedBoard}/${selectedFirmware}.hex`

  board.set(selectedBoard)
  path.set(selectedFirmwarePath)

  function updateBoard(board: string) {
    if (selectedBoard !== board) {
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

<div>Board</div>
<div class="mb-3">
  <Dropdown group size="lg" class="w-100">
    <DropdownToggle caret class="w-100">{selectedBoard}</DropdownToggle>
    <DropdownMenu class="scrollable-menu">
      {#each boards as board}
        <DropdownItem
          active={board === selectedBoard}
          on:click={() => {
            updateBoard(board)
          }}
        >
          {board}
        </DropdownItem>
      {/each}
    </DropdownMenu>
  </Dropdown>
</div>

<div>Hex</div>
<div class="mb-3">
  <Dropdown group size="lg" class="w-100">
    <DropdownToggle caret class="w-100"
      >{`${selectedFirmware}.hex`}</DropdownToggle
    >
    <DropdownMenu>
      {#each firmwareList.get(selectedBoard) as firmware}
        <DropdownItem
          active={firmware === selectedFirmware}
          on:click={() => updateFirmware(firmware)}
        >
          {`${firmware}.hex`}
        </DropdownItem>
      {/each}
    </DropdownMenu>
  </Dropdown>

  <nav>
    <ul>
        <li><a href="#">WordPress</a>
        <!-- First Tier Drop Down -->
        <ul>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Plugins</a></li>
            <li><a href="#">Tutorials</a></li>
        </ul>        
        </li>
        <li><a href="#">Web Design</a>
        <!-- First Tier Drop Down -->
        <ul>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Links</a></li>
            <li><a href="#">Tutorials</a>
          <!-- Second Tier Drop Down -->
            <ul>
                <li><a href="#">HTML/CSS</a></li>
                <li><a href="#">jQuery</a></li>
                <li><a href="#">Other</a>
                    <!-- Third Tier Drop Down -->
                    <ul>
                        <li><a href="#">Stuff</a></li>
                        <li><a href="#">Things</a></li>
                        <li><a href="#">Other Stuff</a></li>
                    </ul>
                </li>
            </ul>
            </li>
        </ul>
        </li>
        <li><a href="#">Graphic Design</a></li>
        <li><a href="#">Inspiration</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>



</div>

<style>
  /* Hide Dropdowns by Default */
  nav ul {
    border: 1px solid #ccc;
  }
  nav ul ul {
    display: none;
    position: fixed;
    left: var(--sidebar-width);
    border: 1px solid #ccc;
    z-index: 100;
  }

  /* Display Dropdowns on Hover */
  nav ul li:hover > ul {
    width: 200px;
    border: 1px solid #ccc;
    display: inherit;
  }

  /* Fisrt Tier Dropdown */
  nav ul ul li {
    width: 170px;
    float: right;
    display: list-item;
    position: relative;
  }

  /* Second, Third and more Tiers	*/
  nav ul ul ul li {
    position: relative;
    top: -60px;
    left: 170px;
  }

  li > a:after {
    content: " >";
  }
  li > a:only-child:after {
    content: "";
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 5;
  }
</style>
