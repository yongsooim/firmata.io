<script lang='ts'>
  export let message = '';
  let visibility  : 'hidden' | 'visible'= 'hidden'
  let disappearTimer: ReturnType<typeof setTimeout>
  let color = 'black'
  let opacity = 0.0

  export function show(messageToShow: string, duration?: number) {
    if(disappearTimer) {
      clearTimeout(disappearTimer)
    }

    visibility = 'visible'
    opacity = 0.8
    message = messageToShow
    
    disappearTimer = setTimeout(() => {
      opacity = 0.0
      visibility = 'hidden'

    }, 3000)
  }

  function close() {
    opacity = 0.0
    visibility = 'hidden'

  }

  window.addEventListener('error', e => {
    console.log(e)
  })

  document.addEventListener('error', e => {
    console.log(e)
  })
  
</script>

<div style="visibility: {visibility}; opacity:{opacity}" on:click={close}>
  <p>
    {message}
  </p>
</div>

<style>
  div {
    width: 400px;
    height: 200px;
    background-color: #dcdcdcaa;
    border: 1px;
    border-radius: 10px;
    position: fixed;
    top: calc(50vh - 100px); 
    left: calc(50vw - 200px);
    z-index: 100;
    text-align: center;
    transition: all 0.3s ease-out;
  }
  
  p {
    font-size: 50px;
    align-items: center;
    align-content: center;
    text-align: center;
    user-select: none;
  }
</style>
