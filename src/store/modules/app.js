import { getCollapse, setCollapse } from '@/utils/local'

export default {
  namespaced: true,

  state: {
    collapse: getCollapse() || false
  },

  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.collapse = !state.collapse
      setCollapse(state.collapse)
    }
  }
}
