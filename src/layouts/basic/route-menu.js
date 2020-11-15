// import { h } from 'vue'
import MenuIcon from './menu-icon'

const generateMenus = (menus) => {
  return menus.map(item => {
    if (item.children && item.children.length) {
      const title = (
        <span>
          <MenuIcon />
          <span>{item.meta && item.meta.title}</span>
        </span>
      )
      return !item.hidden && (
        <a-sub-menu key={item.path} title={title}>
          {generateMenus(item.children)}
        </a-sub-menu>
      )
    }
    return !item.hidden && (
      <a-menu-item key={item.path}>
        <router-link to={item.path}>
          <MenuIcon />
          <span>{item.meta && item.meta.title}</span>
        </router-link>
      </a-menu-item>
    )
  })
}

export default {
  name: 'RouteMenu',
  props: ['menus', 'collapsed'],
  data() {
    return {
      openKeys: ['/components'],
      selectedKeys: [],
      lastOpenKeys: []
    }
  },
  computed: {
    rootSubmenuKeys() {
      return this.menus.map(_ => _.path)
    }
  },
  watch: {
    $route() {
      this.updateMenu()
    },
    collapsed(val) {
      if (val) { // 清空 openKeys
        this.lastOpenKeys = this.openKeys.slice()
        this.openKeys = []
      } else { // 恢复 openKeys
        this.openKeys = this.lastOpenKeys
      }
    }
  },
  mounted() {
    this.updateMenu()
  },
  methods: {
    updateMenu() {
      const routes = this.$route.matched.slice()
      this.selectedKeys = [routes.pop().path]
      const openKeys = []
      routes.forEach(item => {
        item.path && openKeys.push(item.path)
      })
      if (this.collapsed) {
        this.lastOpenKeys = openKeys
      } else {
        this.openKeys = openKeys
      }
    }
  },
  render() {
    const { menus, collapsed } = this
    const handleOpenChange = (openKeys) => {
      const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
      if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
    const menuProps = {
      class: 'menu',
      mode: 'inline',
      theme: 'light',
      inlineCollapsed: collapsed,
      openKeys: this.openKeys,
      selectedKeys: this.selectedKeys,
      onSelect: menu => {
        this.selectedKeys = menu.selectedKeys
        this.$emit('select', menu)
      },
      onOpenChange: handleOpenChange
    }
    return (
      <a-menu {...menuProps}>
        {generateMenus(menus)}
      </a-menu>
    )
  }
}
