<template>
  <layout-default>
    <div class="container card">
      <div class="row shadow bg-body rounded">
        <Navbar @searchData="searchBlog"></Navbar>
      </div>
    </div>
    <div class="container">
      <div class="card my-3 shadow bg-body rounded row">
        <div class="card-body col-12">
          <div class="row flex-between-center align-items-center">
            <p class="col-12 col-md-3" v-if="infoPage">
              Showing {{ infoPage.from + '-' + infoPage.to }} of {{ infoPage.count }} Blogs
            </p>
            <div class="col-12 col-md-5 pagination justify-content-center">
              <PaginationComponent
                :infoPage="infoPage"
                @updatePag="updatePag"
              ></PaginationComponent>
            </div>
            <div class="col-12 col-md-4 d-flex align-items-center">
              <p class="w-25">Sort by:</p>
              <SelectComponent :listSort="listSort" @updateSort="updateSort"></SelectComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container card" id="list-blogs">
      <div class="p-3 shadow bg-body rounded row" v-if="listBlogs.length > 0 && !isLoading">
        <div class="col-4">
          <form class="card shadow" @submit.prevent="handleSubmit()" method="POST">
            <img :src="formBlog.imagePreview" alt="" />
            <div class="card-body">
              <input
                type="file"
                name="imageBlog"
                id="imageBlog"
                @change="handleUpload"
                class="p-1"
              />
              <input
                type="text"
                id="titleBlog"
                class="border mb-1 p-1"
                placeholder="Title Blog"
                v-model="formBlog.nameBlog"
                required
              />
              <textarea
                id="contentBlog"
                class="border p-1"
                v-model="formBlog.contentBlog"
              ></textarea>
              <button type="submit" class="btn btn-primary mt-2 mx-auto d-block">Add Blog</button>
            </div>
          </form>
        </div>
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
      <div class="p-3 shadow bg-body rounded row" v-else>
        <div class="col-12">Loading</div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/layout-default.vue';
import PaginationComponent from '@/components/PaginationComponent';
import SelectComponent from '@/components/SelectComponent';
import { API } from './_BlogScript';
import Navbar from '@/components/Navbar';
import { previewImgUpload } from '@/helpers/Image';

export default {
  name: 'HomeView',
  components: { LayoutDefault, PaginationComponent, SelectComponent, Navbar },
  mixins: [API],
  data: () => ({
    sortValue: 1,
    listBlogs: [],
    listSort: [
      { name: 'Newest', value: 'created_at' },
      { name: 'ID', value: 'id' },
      { name: 'Title', value: 'title' },
      { name: 'Content', value: 'content' },
      { name: 'Update', value: 'updated_at' }
    ],
    sort_by: 'created_at',
    search: '',
    formBlog: {
      nameBlog: 'The Great Dictator',
      contentBlog:
        'Est non voluptas. Vitae repudiandae quo. Omnis nostrum ut.\nIn illum a. Est nemo quibusdam. Blanditiis praesentium at.\nQui animi est. Voluptate iure aut. Animi asperiores debitis',
      imagePreview: 'https://api-placeholder.herokuapp.com/images/fallback/default.png',
      imageFileBlog: null
    }
  }),
  created() {
    this.GetBlogs({ page: this.page, sort_by: this.sort_by, sort_direction: 'desc' });
  },
  methods: {
    previewImgUpload,
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
    },
    updatePag(e) {
      this.GetBlogs({ page: e, sort_by: this.sort_by });
    },
    searchBlog(e) {
      this.search = e;
      this.GetBlogs({ search: this.search, sort_by: this.sort_by });
    },
    updateSort(e) {
      this.sort_by = e;
      this.GetBlogs({ page: this.page, sort_by: this.sort_by, search: this.search });
    },

    handleUpload(e) {
      this.formBlog.imageFileBlog = e.target.files[0] || e.dataTransfer.files[0];

      this.formBlog.imagePreview = this.previewImgUpload(e);
    },
    handleSubmit() {
      const { nameBlog, contentBlog, imageFileBlog } = this.formBlog;
      const fd = new FormData();
      fd.append('blog[image]', imageFileBlog);
      fd.append('blog[title]', nameBlog);
      fd.append('blog[content]', contentBlog);
      this.CreateBlog(fd);
    }
  },
  mounted() {
    this.$eventBus.$on('UPDATE_LIST_BLOGS', (res) => {
      this.listBlogs = res;
    });
  },
  computed: {
    page() {
      const { infoPage } = this;
      if (infoPage) {
        return infoPage.page;
      } else return 1;
    },
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
