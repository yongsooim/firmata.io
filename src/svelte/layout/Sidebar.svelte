<script lang='ts'>
  import { flash } from '../../lib/Flash'
  import FlashButton from '../component/FlashButton.svelte'
  import Connect from '../component/Connect.svelte'
  import FirmwareList from '../component/FirmwareList.svelte'
</script>

<Connect />

<FirmwareList />
<FlashButton />
<div>
</div>

<style>
  div {
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
