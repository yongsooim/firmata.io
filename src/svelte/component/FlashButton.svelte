<script lang='ts'>
  import { flash } from '../../lib/Flash';
  import { path$, board$ } from '../stores';
  import { get } from 'svelte/store';

</script>

<div>
<button on:click={ () => { flash(get(board$), get(path$)) }} >
    ⚡ Upload
</button>
</div>
<style>
  div {
    width: 100%;
  }

  a {
    width: 100%;
    text-align: center;
  }
  
  a:hover {
    background-color: #f5f5f5;
  }

</style>
