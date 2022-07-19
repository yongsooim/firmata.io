<script lang='ts'>
  import { flash } from '../../lib/Flash'
  import Connect from '../component/Connect.svelte'
  import FirmwareList from '../component/FirmwareList.svelte'
</script>

<Connect />

<FirmwareList />

<style>
  div {
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
