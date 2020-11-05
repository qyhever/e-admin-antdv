export default {
  namespaced: true,

  state: {
    currentUser: {}
  },

  mutations: {
    SET_USER(state, data) {
      state.currentUser = data || {}
    }
  }
}
