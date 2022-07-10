<script lang="ts">
  import Serial from "./lib/Serial.svelte"
  import { Styles, Row, Col, Button } from "sveltestrap"
import firmata from "./lib/Firmata"

</script>

<main>

  <div class="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
    <h1>Navbar</h1>asf
  </div>
  
  <Row >
    <Col class='border'>
      <h1>Navbar</h1>
    </Col>
    <Col class='col-2 border'>
      <ul id = "menu">
        <li>
          <a href = 'https://github.com/yongsooim/firmata.io' target=_blank><img alt = 'gh logo' src = './static/icon/gh.png'></a>
        </li>
      </ul>
    </Col>
  </Row>
  <Row class ='h-100 '>
  <Col class = 'border col-2 '>
    sidebar
  </Col>
  <Col>
    <Row class='border'>
      <Col>
        <h1>firmata.io<h1>
        <h3> fast prototyping on the browser.</h3>
      </Col>
    </Row>
    <Row class='border'>

      <Col class = 'border'>
      <Row class='border'>
        <Col>
          <Serial />
        </Col>
      </Row>
      <Row class='border'>
        <Col>
          <Button color="primary">asdasdl</Button>
        </Col>
      </Row>
      <Row class = 'border'>
        <p>
          Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
          apps.
        </p>

        <p>
          Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
          the officially supported framework, also powered by Vite!
        </p>
      </Row>
      </Col>

    </Row>
    <Row>
      <Col>
        This page is hosted on <a href='https://pages.github.com/' target='_blank'>github pages</a>.
      </Col>
    </Row>
  </Col>
</Row>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    p {
      max-width: none;
    }
  }

  main{
    height: 100%;
    background-color: #444444;
  }

  ul#menu li{
		display : inline;
	}

</style>
