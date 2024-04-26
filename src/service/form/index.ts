import axios from '../request'
import type { ResultData } from '@/service/request/type.ts'
// 有寿件列表
export const getviablePartList1 = function <T = any>(
  params?: any
): Promise<ResultData<T>> {
  return axios.post('/manager/queryLifetimeComponInfo', params)
}
