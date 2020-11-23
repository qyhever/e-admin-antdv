<template>
  <header class="header">
    <div class="header-trigger" @click="onToggle">
      <ComSvgIcon :name="collapsed ? 'menu-unfold' : 'menu-fold'"></ComSvgIcon>
    </div>
    <a-dropdown placement="bottomRight">
      <a-row type="flex" align="middle" class="user-container">
        <a-avatar :size="26" :src="user.iconUrl">
          <template v-slot:icon><UserOutlined /></template>
        </a-avatar>
        <span class="username">{{user.username}}</span>
      </a-row>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item>
            <UserOutlined />
            <span>个人中心</span>
          </a-menu-item>
          <a-menu-divider></a-menu-divider>
          <a-menu-item @click="onLogout">
            <LogoutOutlined />
            <span>退出登录</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </header>
</template>

<script>
import { UserOutlined, LogoutOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode } from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderBar',
  components: {
    UserOutlined,
    LogoutOutlined
  },
  computed: {
    ...mapGetters(['collapsed', 'user'])
  },
  methods: {
    onToggle() {
      this.$store.commit('app/TOGGLE_SLIDE_BAR')
    },
    onLogout() {
      this.$confirm({
        title: '温馨提示',
        content: '确定要退出登录吗',
        icon: createVNode(ExclamationCircleOutlined),
        onOk: () => {
          this.$store.dispatch('user/Logout').then(() => {
            // this.$router.replace('/login')
            location.reload(true)
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: @header-height;
    padding-right: 24px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  }
  .header-trigger {
    width: @header-height;
    height: @header-height;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .2s;
    cursor: pointer;
    font-size: @font-size-extra-large;
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
      color: rgba(105, 123, 140, .7);
    }
  }
</style>
