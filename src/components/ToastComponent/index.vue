<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast show">
      <div class="toast-header">
        <strong class="me-auto">Notification</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" v-html="msg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast-component',
  data: () => ({
    msg: 'Loading...'
  }),
  mounted() {
    this.$eventBus.$on('SEND_MSG', (res) => {
      this.msg = res;
    });
  }
};
</script>
