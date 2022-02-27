import Vue from 'vue';
import Vuex from 'vuex';
import Blogs from '@/views/BlogView/_BlogStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  getters: {},
  mutations: {
    updateLoadingState(state, flag) {
      state.isLoading = flag;
    }
  },
  actions: {
    onLoading(context, flag) {
      context.commit('updateLoadingState', flag);
    }
  },
  modules: {
    Blogs
  }
});
