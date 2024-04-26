import type { App } from 'vue'
import { formateTimeStr } from '@/utils/tools'
import { eventBus } from '@/utils/eventBus'
import _ from 'lodash'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export const registerUtils = {
  install: (app: App) => {
    //注册全局组件
    // app.component('component-name', Component)
    //注册全局指令
    // app.directive('directive-name', Directive)
    // 注册全局属性
    // app.config.globalProperties.$property = 'value'
    // 注册全局方法
    app.config.globalProperties.$formateTimeStr = formateTimeStr
    //注册全局的事件总线
    app.config.globalProperties.$eventBus = eventBus
    // 注册全局的lodash
    app.config.globalProperties.$_ = _
  }
}

// 简单配置
//   minimum:0.1, // 最小百分比
//   template: "..." // 修改标记结构，需要一个包含 role='bar' 属性的元素。
//   ease: 'ease',  // 动画设置
//   speed: 500, // 速度设置毫秒ms
//   trickle: false, // 关闭进度条步进
//   trickleRate: 0.02, // 度条步进
//   trickleSpeed: 800, // 度条步进速度毫秒ms
//   showSpinner: false // 关闭进度环 默认true
NProgress.inc(0.2)
NProgress.configure({
  minimum: 0.1,
  easing: 'ease',
  trickle: false,
  trickleRate: 0.02,
  trickleSpeed: 800,
  speed: 500,
  showSpinner: true
})
