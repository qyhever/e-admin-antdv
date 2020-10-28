<template>
  <a-config-provider :locale="zhCN">
    <router-view/>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { camelCase } from '@/utils/dom'
console.log(camelCase('background-color'))
export default {
  data() {
    return {
      zhCN
    }
  }
}
</script>
