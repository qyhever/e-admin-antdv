import { getCollapse, setCollapse } from '@/utils/local'

export default {
  namespaced: true,

  state: {
    collapsed: getCollapse() || false,
    tagNavList: []
  },

  mutations: {
    TOGGLE_SLIDE_BAR(state) {
      state.collapsed = !state.collapsed
      setCollapse(state.collapsed)
    }
  }
}
