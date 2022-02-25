<template>
  <div class="layout-default mx-auto">
    <Navbar></Navbar>
    <div class="container">
      <div class="card my-3 shadow bg-body rounded row">
        <div class="card-body col-12">
          <div class="row flex-between-center align-items-center">
            <p class="col-12 col-md-8">Showing 1-24 of 205 Products</p>
            <div class="col-12 col-md-4 d-flex align-items-center">
              <p class="w-25">Sort by:</p>
              <select class="form-select flex-grow-1">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'layout-default',
  components: { Navbar }
};
</script>
