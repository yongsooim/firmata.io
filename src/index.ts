import Sidebar from './svelte/layout/Sidebar.svelte';
import Main from './svelte/layout/Main.svelte'
import Popup from './svelte/component/Popup.svelte'

const sidebar = new Sidebar({
  target: document.getElementById('sidebar')
})

const main = new Main({
  target: document.getElementById('main')
})

const popup = new Popup({
  target: document.getElementById('popup')
})

export function showPopup(message: string) {
  popup.showPopup(message)
}