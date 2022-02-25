<template>
  <layout-default>
    <div class="container">
      <div class="card my-3 shadow bg-body rounded row">
        <div class="card-body col-12">
          <div class="row flex-between-center align-items-center">
            <p class="col-12 col-md-3" v-if="infoPage">
              Showing {{ infoPage.from + '-' + infoPage.to }} of {{ infoPage.count }} Blogs
            </p>
            <div class="col-12 col-md-5 pagination justify-content-center">
              <SearchComponent :infoPage="infoPage"></SearchComponent>
            </div>
            <div class="col-12 col-md-4 d-flex align-items-center">
              <p class="w-25">Sort by:</p>
              <select class="form-select flex-grow-1" v-model="sortValue" @change="handleChange()">
                <option value="1">Newest</option>
                <option value="2">A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container card" id="list-blogs">
      <div class="p-3 shadow bg-body rounded row" v-if="listBlogs.length > 0">
        <div class="col-4" v-for="(blog, index) in listBlogs" :key="'blog' + index">
          <div class="card">
            <img :src="blog.image.url" class="card-img-top" :alt="blog.title" />
            <div class="card-body">
              <h5 class="card-title">{{ blog.title }}</h5>
              <p class="card-text">
                {{ blog.content }}
              </p>
              <a class="btn btn-primary mt-2">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/layout-default.vue';
import SearchComponent from '@/components/SearchComponent';
import { API } from './_BlogScript';
export default {
  name: 'HomeView',
  components: { LayoutDefault, SearchComponent },
  mixins: [API],
  data: () => ({
    sortValue: 1,
    listBlogs: []
  }),
  created() {
    this.GetBlogs();
  },
  methods: {
    handleChange() {
      switch (this.sortValue) {
        case '2':
          this.listBlogs.sort((blog1, blog2) => blog1.title.localeCompare(blog2.title));
          break;
        case '1':
        default:
          this.listBlogs.sort((blog1, blog2) => blog2.created_at.localeCompare(blog1.created_at));
          break;
      }
    }
  },
  mounted() {
    this.$eventBus.$on('UPDATE_LIST_BLOGS', (res) => {
      this.listBlogs = res;
    });
  },

  computed: {
    infoPage() {
      const { pag } = this.$store.state.Blogs;
      if (typeof pag != undefined) {
        return pag;
      }
      return false;
    }
  }
};
</script>
