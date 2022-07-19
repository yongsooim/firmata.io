<script lang='ts'>
  export let message = '';
  let style  : 'hidden' | 'none'= 'hidden'
  
  export function showPopup(messageToShow: string) {
    message = messageToShow;
    style = 'none'

    setTimeout(() => {
      style = 'hidden'
    }, 3000)
  }

  window.addEventListener('error', e => {
    console.log(e)
  })

  document.addEventListener('error', e => {
    console.log(e)
  })
  
  showPopup('hi')
</script>

<div style="visibility: {style};">
  {message}
</div>

<style>
  div {
    align-items: center;
    align-content: center;
    width: 200px;
    height: 100px;
    background-color: aliceblue;
    border: 1px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5000;
  }
</style>
