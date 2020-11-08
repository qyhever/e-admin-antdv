<template>
  <header class="header">
    <div class="header-trigger" @click="onToggle">
      <ComSvgIcon name="menu-fold"></ComSvgIcon>
    </div>
    <a-dropdown placement="bottomRight">
      <a-row type="flex" align="middle" class="user-container">
        <a-avatar :size="32">
          <template v-slot:icon><UserOutlined /></template>
        </a-avatar>
        <span class="username">etachsir</span>
      </a-row>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item>
            <UserOutlined />
            <span>个人中心</span>
          </a-menu-item>
          <a-menu-divider></a-menu-divider>
          <a-menu-item>
            <LogoutOutlined />
            <span>退出登录</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </header>
</template>

<script>
import { UserOutlined, LogoutOutlined } from '@ant-design/icons-vue'
export default {
  name: 'HeaderBar',
  components: {
    UserOutlined,
    LogoutOutlined
  },
  methods: {
    onToggle() {
      this.$store.commit('app/TOGGLE_SLIDE_BAR')
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: @header-height;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  }
  .header-trigger {
    width: @header-height;
    height: @header-height;
    font-size: @font-size-extra-large;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .2s;
    cursor: pointer;
    &:hover {
      // color: @color-primary;
      background-color: #f9f9fc;
    }
  }
  .user-container {
    padding: 0 12px;
    transition: background-color .2s;
    cursor: pointer;
    &:hover {
      // color: @color-primary;
      background-color: #f9f9fc;
    }
    .username {
      margin-left: 8px;
    }
  }
</style>
