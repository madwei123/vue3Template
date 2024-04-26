import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './constantRoute'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})
// 白名单
const whiteList = ['/login', '/register']

router.beforeEach((to, from) => {
  NProgress.start() ///显示进度条
  // 检查用户是否已经登录并且拥有权限
  const isLogged = true
  // 如果没有权限就停留在当前页
  const hasPermission = true
  if (isLogged && hasPermission) {
    // 如果用户已经登录，直接放行
    return
  } else {
    // 如果用户没有登录，检查他们是否正在访问白名单中的路由
    if (whiteList.includes(to.path)) {
      // 如果是，直接放行
      return
    } else {
      // 如果不是，重定向到登录页面
      return '/login'
    }
  }
})
export default router

//路由切换后，关闭进度条
router.afterEach((to, from) => {
  NProgress.done() //关闭加载进度条
})
