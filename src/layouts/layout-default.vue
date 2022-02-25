<template>
  <div class="layout-default mx-auto">
    <Navbar></Navbar>

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
