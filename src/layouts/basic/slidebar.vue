<template>
  <a-layout-sider
    class="slidebar"
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
    :width="210"
    :collapsedWidth="60"
    theme="light"
  >
    <router-link class="logo-container" to="/" title="Ant Simple Pro">
      <img class="image" src="@/assets/images/logo.png" alt="logo">
      <transition name="title-fade">
        <h1 v-if="!collapsed" class="title">Ant Simple Pro</h1>
      </transition>
    </router-link>
    <a-menu
      class="menu"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="light"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span><MailOutlined /><span>Navigation One</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span><AppstoreOutlined /><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
    <div v-for="(item, index) in menus" :key="index">{{item.meta && item.meta.title}}</div>
  </a-layout-sider>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue'
import useMenus from './useMenus'

export default {
  name: 'SlideBar',
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined
  },
  data() {
    return {
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
    }
  },
  watch: {
    openKeys(val, oldVal) {
      this.preOpenKeys = oldVal
    }
  },
  computed: {
    ...mapGetters(['collapsed'])
  },
  setup() {
    const { menus } = useMenus()
    console.log(menus)
    return {
      menus
    }
  }
}
</script>

<style lang="less" scoped>
  .slidebar {
    // background: #001529;
  }
  .menu {
    border-right: 0;
  }
  .logo-container {
    display: block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 16px;
    .image {
      width: 48px;
      height: 48px;
      display: inline-block;
      vertical-align: middle;
    }
    .title {
      .text-overflow;
      max-width: 116px;
      display: inline-block;
      vertical-align: middle;
      margin: 0;
      margin-left: 12px;
      color: @color-primary;
      font-weight: 600;
      font-size: 16px;
    }
  }
  .title-fade {
    &-enter-active {
      animation: .3s title-fade-in;
    }

    &-leave-active {
      animation: .3s title-fade-out;
    }
  }
  @keyframes title-fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes title-fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
</style>
