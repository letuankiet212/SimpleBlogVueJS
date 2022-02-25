import { APIGetBlogs } from './_BlogApi';

export const API = {
  data: () => ({
    domain: 'https://api-placeholder.herokuapp.com/api/v1/',
    isLoading: false
  }),
  methods: {
    async GetBlogs() {
      if (!this.isLoading) {
        this.isLoading = true;
        await APIGetBlogs(this.domain).then((res) => {
          console.log('Data Res', res);
          if (res.status == 200) {
            const { data, pagy } = res.data;
            this.$store.commit('Blogs/UPDATE_LIST_BLOG', data);
            this.$store.commit('Blogs/UPDATE_PAG', pagy);
          } else {
            alert('Error');
          }
        });
      }
      return false;
    }
  }
};
