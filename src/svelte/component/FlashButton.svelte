<script lang='ts'>
  import { flash } from '../../lib/Flash';
  import { Button } from 'sveltestrap';
  //import { selectedBoard, selectedFirmwarePath } from './BoardList.svelte';
  import { path, board } from '../stores';
  import { get } from 'svelte/store';

</script>

<Button on:click={ () => { flash(get(board), get(path)) }} size='lg' class = 'w-100'>
  ⚡ Upload
</Button>
