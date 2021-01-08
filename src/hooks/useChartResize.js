import { onMounted, onBeforeUnmount, watch } from 'vue'
import store from '@/store'

export default function (chart) {
  function onResize() {
    chart.resize()
  }

  let timer = null

  watch(() => store.getters.collapsed, () => {
    timer = setTimeout(() => {
      onResize()
    }, 500)
  })

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    timer && clearTimeout(timer)
  })
}
