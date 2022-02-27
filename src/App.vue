<template>
  <div id="app">
    <router-view />
    <div class="loading-page" :class="!isLoading ? 'hidden' : ''">
      <div class="progress-bar">
        <div class="progress-content"></div>
      </div>
    </div>
    <toast-component></toast-component>
  </div>
</template>

<script>
import ToastComponent from '@/components/ToastComponent';
export default {
  components: { ToastComponent },
  data: () => ({
    toggle: false
  }),
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  mounted() {
    this.toggle = true;
  }
};
</script>

<style lang="scss">
@import './GlobalStyled.scss';
</style>
