<script lang="ts">
  import Sidebar from "./svelte/layout/Sidebar.svelte";
  import Footer from "./svelte/layout/Footer.svelte";
  import Main from "./svelte/layout/Main.svelte";
  import { Container, Col, Row, Nav, Styles } from 'sveltestrap'

</script>
<Styles />

<div id='sidebar-container'>
  <sidebar>
    <Sidebar />
  </sidebar>
</div>

<main class="col-md-8 ms-sm-auto col-lg-8 px-md-4 ">
  <Main />
</main>

<footer>
  <Footer />
</footer>

<style>
  :root {
    --sidebar-width: 250px;
    --footer-height: 40px;
  }

  #sidebar-container {
    height: calc(100vh - var(--footer-height));
    width: var(--sidebar-width);
    padding: 10px;
    margin: 0px;
    position:relative;
    background-color: lightgrey;
  }

  sidebar {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0px;
    padding: 10px;
    left: 0;

    overflow-x: hidden;
    overflow-y: hidden;
  }

  main {
    height: calc(100vh - var(--footer-height)); 
    width: calc(100vw - var(--sidebar-width));
    position: fixed;
    top: 0;
    left: var(--sidebar-width);
  }

  footer {
    height: var(--footer-height);
    width: 100%;
    position: fixed;
    bottom: 0;
  }

</style>
