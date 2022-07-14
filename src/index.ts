import Sidebar from './svelte/layout/Sidebar.svelte';
import Main from './svelte/layout/Main.svelte'

const sidebar = new Sidebar({
  target: document.getElementById('sidebar')
})


const main = new Main({
  target: document.getElementById('main')
})

