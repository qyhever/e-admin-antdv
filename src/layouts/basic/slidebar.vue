<template>
  <a-layout-sider
    class="slidebar"
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
    :width="210"
    :collapsedWidth="60"
  >
    a
  </a-layout-sider>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SlideBar',
  computed: {
    ...mapGetters(['collapsed'])
  }
}
</script>

<style lang="less" scoped>
  .slidebar {
    background: #001529;
  }
</style>
