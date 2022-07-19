<script lang='ts'>
  import { selectedBoard, selectedHex } from "../stores";
  import { get } from "svelte/store";
  import Select from './select/index.js'
  import { firmwareList } from '../../consts'

  const boardList = firmwareList.map(v => v[0])

  let boardText = 'Select board'
  selectedBoard.subscribe((str) => {
    boardText = str
  })

  let hexText = 'Select hex'
  selectedHex.subscribe((str) => {
    hexText = str
  })
</script>

<div class = 'select-title'>Select board/ hex</div>
<div class = 'select-wrapper'>
  <Select id='boardselect' items={ boardList }  value='uno' selectType = 'board'></Select>
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
