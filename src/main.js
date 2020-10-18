import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.less'
import initPlugin from './plugins'

const app = createApp(App)

app.config.productionTip = false
app.use(router)
app.use(store)
initPlugin(app)
app.mount('#app')
