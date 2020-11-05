<template>
  <header class="header">
    <div class="header-trigger">
      <ComSvgIcon name="menu-fold"></ComSvgIcon>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style lang="less" scoped>
  .header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  }
  .header-trigger {
    width: 60px;
    height: 60px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
</style>
