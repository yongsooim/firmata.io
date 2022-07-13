<script>
  import { flash } from '../../lib/Flash'
  import BoardList from '../component/BoardList.svelte'
  import { Button, Container, ButtonGroup } from 'sveltestrap'
  import FlashButton from '../component/FlashButton.svelte'
  import Connect from '../component/Connect.svelte'

</script>

<div class="position-sticky pt-3" id='wrapper'>
  <ul class="nav flex-column">
    <li class="nav-item">
      <FlashButton />
      <BoardList />
    </li>

    <li class="nav-item" >
      <Connect />
    </li>
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="file" />
        Orders
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="shopping-cart" />
        Products
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="users" />
        Customers
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="bar-chart-2" />
        Reports
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="layers" />
        Integrations
      </a>
    </li>
  </ul>

  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" >
    <span>Saved reports</span>
    <a class="link-secondary" href={"#"} aria-label="Add a new report">
      <span data-feather="plus-circle" />
    </a>
  </h6>
  <ul class="nav flex-column mb-2">
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="file-text" />
        Current month
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="file-text" />
        Last quarter
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href={"#"}>
        <span data-feather="file-text" />
        Social engagement
      </a>
    </li>



  </ul>
</div>

<style>
  #wrapper {
    width:300px;
    margin: 20px;
  }
</style>