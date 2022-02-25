<template>
  <layout-default>
    <div class="container card" id="list-blogs">
      <div class="p-3 shadow bg-body rounded row">
        <div class="col-4" v-for="index in 3" :key="'blog' + index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" class="btn btn-primary mt-2">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/layout-default.vue';
import { API } from './_BlogScript';
export default {
  name: 'HomeView',
  components: { LayoutDefault },
  mixins: [API],
  created() {
    this.GetBlogs();
  }
};
</script>
