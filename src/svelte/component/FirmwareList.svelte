<script lang='ts'>
  import { selectedBoard, selectedHex } from "../stores";
  import { get } from "svelte/store";
  import Select from './select/index.js'
  import { firmwareList } from '../../consts'

  import { flash } from '../../lib/Flash';



  const boardList = firmwareList.map(v => v[0])

  let boardText = 'Select board'
  selectedBoard.subscribe((str) => {
    boardText = str
  })

  let hexText = 'Select hex'
  selectedHex.subscribe((str) => {
    hexText = str
  })

  function clickHandler() {
    flash($selectedBoard, $selectedHex)
  }
</script>

<div class = 'select-title'>Select board/hex</div>
<div class = 'select-wrapper'>
  <Select id='boardselect' items={ boardList }  value='uno' selectType = 'board'></Select>
</div>

<div class = 'button-wrapper'>
<button on:click={clickHandler}>
  ⚡ Upload
</button>
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
    padding-bottom: 0px;
  }

  button {
    width: var(--sidebar-width);
    border: 0px;
    height: 50px;
    cursor: pointer;
  }
  

</style>
