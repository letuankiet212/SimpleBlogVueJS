const state = {
  listBlog: [],
  pag: null
};

const mutations = {
  UPDATE_LIST_BLOG(state, value) {
    state.listBlog = value;
  },
  UPDATE_PAG(state, value) {
    state.pag = value;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
