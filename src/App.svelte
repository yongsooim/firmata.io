<script lang="ts">
  import Serial from "./lib/Serial.svelte"
  import { Styles, Button, Row, Col } from "sveltestrap"

</script>

<main>
  <Styles />

  <Row class='bottom-buffer border'>
    <Col>
      <h1>firmata.io<h1>
      <h3> fast prototyping on the browser.</h3>
      <h3>No need to downloading tools. Everything happens here.</h3>
    </Col>
  </Row>
  <Row class='bottom-buffer border'>

    <Col class = 'border'>
    <Row class='bottom-buffer border'>
      <Col>
        <Serial />
      </Col>
    </Row>
    <Row class='bottom-buffer border'>
      <Col>
        <Button color="primary">asdasdl</Button>
      </Col>
    </Row>
    <Row class = 'bottom-buffer border'>
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
</style>
