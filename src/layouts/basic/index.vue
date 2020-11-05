<template>
  <section class="layout">
    <aside class="aside">
      aside
    </aside>
    <section class="layout-content">
      <HeaderBar></HeaderBar>
      <router-view/>
    </section>
  </section>
</template>

<script>
import HeaderBar from './headerbar'
export default {
  name: 'BasicLayout',
  components: {
    HeaderBar
  }
}
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
  }
  .aside {
    flex: 0 0 256px;
    width: 256px;
    background: #001529;
  }
  .layout-content {
    flex: auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f0f2f5;
  }
  .header {
    z-index: 9;
    width: 100%;
  }
  .global-header {
    display: flex;
    position: relative;
    height: 64px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  }
</style>
