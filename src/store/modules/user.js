import { getInfo } from '@/api/global'
import { removeToken } from '@/utils/local'

export default {
  namespaced: true,

  state: {
    currentUser: {},
    resourceList: []
  },

  mutations: {
    SET_USER(state, data) {
      state.currentUser = data || {}
    },
    SET_RESOURCE_LIST(state, data) {
      state.resourceList = data
    }
  },
  actions: {
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const resourceList = response.resources.map(v => v.code)
            if (resourceList.length) {
              commit('SET_USER', response)
              commit('SET_RESOURCE_LIST', resourceList)
              resolve()
            } else {
              reject(new Error('resources must be a non-null array !'))
            }
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    // { commit }, data
    GenerateRoutes() {
      return new Promise(resolve => {
        // const { roles } = data
        // const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        // commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    Logout({ commit }) {
      return new Promise((resolve) => {
        // async api
        commit('SET_USER', {})
        commit('SET_RESOURCE_LIST', [])
        removeToken()
        resolve()
      })
    }
  }
}
