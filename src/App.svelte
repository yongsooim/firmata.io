<script lang="ts">
  import Sidebar from "./svelte/layout/Sidebar.svelte";
  import Footer from "./svelte/layout/Footer.svelte";
  import Main from "./svelte/layout/Main.svelte";
  import { Container, Col, Row, Nav, Styles } from 'sveltestrap'

</script>
<Styles />

<Container class="container-fluid">
  <Row class="row">
    <Col>
      <Nav id="sidebarMenu" class="d-md-block bg-light sidebar" >
        <Sidebar />
      </Nav>
    </Col>
    <Col class="col-md-8 ms-sm-auto col-lg-8 px-md-4 ">
      <Main />
    </Col>
  </Row>

  <Row class = "row border">
    <footer class="py-4 bg-light mt-auto fixed-bottom ">
      <Footer />
    </footer>
  </Row>

</Container>
