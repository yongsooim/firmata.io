<script lang="ts">
  import { Styles } from "sveltestrap"
  import Sidebar from "./svelte/Sidebar.svelte";
  import Footer from "./svelte/Footer.svelte";
  import Main from "./svelte/Main.svelte";

</script>
<Styles />

  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <Sidebar />
      </nav>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Main />
      </main>
    </div>

    <div class = "row">
      <footer class="py-4 bg-light mt-auto">
        <Footer />
      </footer>
    </div>
  
  </div>
  