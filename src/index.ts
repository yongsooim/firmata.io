import Sidebar from './svelte/layout/Sidebar.svelte';
import Main from './svelte/layout/Main.svelte'
import Popup from './svelte/component/Popup.svelte'

const sidebar = new Sidebar({
  target: document.getElementById('sidebar')
})

const main = new Main({
  target: document.getElementById('main')
})

export const popup = new Popup({
  target: document.getElementById('popup')
})
