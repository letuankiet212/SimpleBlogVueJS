<template>
  <layout-default>
    <div class="container card shadow border p-5" v-if="dataBlog != null">
      <div class="row">
        <router-link to="/" class="col-lg-6">
          <h1><span class="badge rounded-pill bg-dark">🔙List Blogs</span></h1>
        </router-link>
      </div>
      <hr />
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img :src="dataBlog.image.url" width="100%" height="auto" alt="" />
        </div>
        <div class="col-lg-6">
          <h4>{{ dataBlog.title }}</h4>
          <hr />
          <p>{{ dataBlog.content }}</p>
          <p>Last edit : {{ toDateString(dataBlog.updated_at, 'date') }}</p>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import layoutDefault from '@/layouts/layout-default.vue';
import { API } from './_BlogScript';
import { toDateString } from '@/helpers/Date';
export default {
  components: { layoutDefault },
  name: 'Detail_Blog',
  mixins: [API],
  data: () => ({
    dataBlog: null
  }),
  methods: {
    toDateString
  },
  created() {
    this.GetBlog();
  },
  mounted() {
    this.$eventBus.$on('UPDATE_DETAIL_BLOG', (res) => {
      this.dataBlog = res;
    });
  }
};
</script>
