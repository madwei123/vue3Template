let BASE_URL
// 怎么判断是开发还是生产环境
const isDev = import.meta.env.DEV
if (isDev) {
  BASE_URL = '/api'
} else {
  BASE_URL = import.meta.env.VITE_BASE_URL
}
export { BASE_URL }
