<script lang='ts'>
  export let message = '';
  let style  : 'hidden' | 'visible'= 'hidden'
  let disappearTimer: NodeJS.Timeout;
  
  export function showPopup(messageToShow: string) {
    if(disappearTimer) {
      clearTimeout(disappearTimer)
    }

    style = 'visible'
    message = messageToShow;
    
    disappearTimer = setTimeout(() => {
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
  <p>
    {message}
  </p>
</div>

<style>
  div {
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
  
  p {
    align-items: center;
    align-content: center;
    text-align: center;
  }
</style>
