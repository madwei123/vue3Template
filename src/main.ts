import 'normalize.css'
import '@/assets/less/index.less'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'
import router from './router'
import registerIcon from '@/plugins/registerIcon'
import { registerUtils } from '@/plugins/registerUtils'
import { registerGlbCpn } from '@/autoRegisterCpns'
import pinia from '@/stores'

const app = createApp(App)
app.use(pinia)

app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.use(registerIcon)
app.use(registerGlbCpn)
app.use(registerUtils)

app.mount('#app')
