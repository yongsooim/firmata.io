<script lang='ts'>
  import { board$, path$ } from "../stores";
  import { firmwareList } from '.././../consts'
  import { get } from "svelte/store";
  import Select from './select/index.js'

  const boardList = Array.from(firmwareList.keys())

  let selectedBoard = firmwareList.keys().next().value
  let firmwaresInSelectedBoard = firmwareList.get(selectedBoard)

  function updateBoard(board: string) {
    board$.set(board)
    firmwaresInSelectedBoard = firmwareList.get(board)
    updateFirmware(firmwareList.get(board)[0])
    firmwaresInSelectedBoard = ['asf', 'asda']
    console.log('?')

  }

  function updateFirmware(firmware: string) { 
    path$.set(`./static/hex/${selectedBoard}/${firmware}.hex`)
    console.log(get(path$))
  }


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
