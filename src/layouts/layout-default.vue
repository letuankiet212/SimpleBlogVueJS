<template>
  <div class="layout-default container mx-auto">
    <Navbar></Navbar>
    <div class="card mb-3">
      <div class="card-body">
        <div class="row flex-between-center">
          <p class="col-12 col-md-8">Showing 1-24 of 205 Products</p>
          <div class="col-12 col-md-4 row">
            <p class="col-4">Sort by:</p>
            <div class="col-8">
              <select class="form-select">
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
