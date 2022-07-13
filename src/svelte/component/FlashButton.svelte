<script lang='ts'>
  import { flash } from '../../lib/Flash';
  import { Button } from 'sveltestrap';
  //import { selectedBoard, selectedFirmwarePath } from './BoardList.svelte';
  import { path, board } from '../stores';
  import { get } from 'svelte/store';

</script>

<a on:click={ () => { flash(get(board), get(path)) }} href={'#'}>
    ⚡ Upload
</a>

<style>
  a {
      text-align: center;
    }
  a:hover {
    background-color: #f5f5f5;
  }

</style>