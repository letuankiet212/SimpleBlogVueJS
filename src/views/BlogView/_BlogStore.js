const state = {
  listBlogs: [],
  pag: null
};

const mutations = {
  UPDATE_LIST_BLOGS(state, value) {
    state.listBlogs = value;
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
