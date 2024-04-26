import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const registerIcon = {
  install: (app) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}

export default registerIcon
