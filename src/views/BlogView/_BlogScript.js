import { APIEditBlog, APIDelBlog, APICreateBlog, APIGetBlog, APIGetBlogs } from './_BlogApi';

export const API = {
  data: () => ({
    domain: 'https://api-placeholder.herokuapp.com/api/v1/',
    isLoading: false
  }),
  methods: {
    async GetBlogs(dataObj = {}) {
      if (!this.isLoading) {
        this.isLoading = true;
        await APIGetBlogs(this.domain, dataObj).then((res) => {
          if (res.status == 200) {
            const { data, pagy } = res.data;
            this.$store.commit('Blogs/UPDATE_LIST_BLOGS', data);
            this.$store.commit('Blogs/UPDATE_PAG', pagy);
            this.$eventBus.$emit('UPDATE_LIST_BLOGS', data);
          } else {
            alert('Error');
          }
          this.isLoading = false;
        });
      }
      return false;
    },
    async GetBlog(dataObj = 3) {
      if (!this.isLoading) {
        this.isLoading = true;
        await APIGetBlog(this.domain, dataObj).then((res) => {
          if (res.status == 200) {
            const { data } = res;
            this.$eventBus.$emit('UPDATE_DETAIL_BLOG', data);
          } else {
            this.$router.push({ name: '404' });
          }
          this.isLoading = false;
        });
      }
      return false;
    },
    async CreateBlog(dataObj) {
      if (!this.isLoading) {
        this.isLoading = true;
        await APICreateBlog(this.domain, dataObj).then((res) => {
          this.isLoading = false;
          if (res.status == 201) {
            this.GetBlogs({ page: 1, sort_direction: 'desc', sort_by: 'created_at' });
          } else {
            alert('Error');
          }
        });
      }
      return false;
    },
    async EditBlog(id, dataObj) {
      if (!this.isLoading) {
        this.isLoading = true;
        await APIEditBlog(this.domain, id, dataObj).then((res) => {
          console.log(res);
        });
      }
    },
    async DeleteBlog(id) {
      if (!this.isLoading) {
        this.isLoading = true;
        await APIDelBlog(this.domain, id).then((res) => {
          this.isLoading = false;
          if (res.status == 204) {
            this.GetBlogs({ page: 1, sort_direction: 'desc', sort_by: 'created_at' });
          } else {
            alert('Error');
          }
        });
      }
      return false;
    }
  }
};
