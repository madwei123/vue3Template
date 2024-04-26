const modules = import.meta.glob('./cpns/*.vue')

export const registerGlbCpn = {
  install: (app) => {
    for (const path in modules) {
      modules[path]().then((mod: any) => {
        // 获取组件的名称
        const matchResult = path.match(/\.\/cpns\/(.*)\.vue/)
        if (matchResult && matchResult[1]) {
          const componentName = matchResult[1]
          // 注册全局组件
          app.component(componentName, mod.default)
        }
      })
    }
  }
}
