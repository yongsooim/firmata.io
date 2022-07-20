<script lang='ts'>
  import { flash } from '../../lib/Flash'
  import Connect from '../component/Connect.svelte'
  import Upload from '../component/Upload.svelte'
  import { popup } from '../../index';
</script>


<Connect />
<div id='upload-wrapper'>
  <Upload />
</div>

<button style='width:var(--sidebar-width); top:80px; margin-top:80px; height:var(--height);' on:click={() => {popup.show('popup test')}}> 
  popup test
</button>

<style>
  #upload-wrapper {
    position:fixed;
    width: var(--sidebar-width);
    bottom: 0px;
  }
</style>
