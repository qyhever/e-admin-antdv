import { ref, onBeforeUnmount } from 'vue'
import store from '@/store'
import { routes } from '@/router/routes'
import { getAccessRoutes, getAccessMenus } from '@/utils'

export default function useMenus() {
  const menus = ref([])
  const unsubscribe = store.subscribe((mutation, state) => {
    if (mutation.type === 'user/SET_RESOURCE_LIST') {
      const accessRoutes = getAccessRoutes(routes, state.user.resourceList)
      menus.value = getAccessMenus(accessRoutes)
    }
  })
  onBeforeUnmount(() => {
    unsubscribe()
  })
  return {
    menus
  }
}
