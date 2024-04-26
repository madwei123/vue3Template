// 数据返回的接口
// 定义请求响应参数，不含data
interface Result {
  CODE: number | string
  MESSAGE: string
}

// 请求响应参数，包含data
export interface ResultData<T = any> extends Result {
  data?: T
  DATA?: T
  [props: string]: any
}
