import { APIGetBlogs } from './_BlogApi';

export const API = {
  data: () => ({
    domain: 'https://api-placeholder.herokuapp.com/api/v1/',
    isLoading: false
  }),
  methods: {
    async GetBlogs(data = {}) {
      if (!this.isLoading) {
        this.isLoading = true;
        await APIGetBlogs(this.domain, data).then((res) => {
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
    }
  }
};
