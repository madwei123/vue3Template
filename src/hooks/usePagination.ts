import { reactive } from 'vue'

export function usePaginationVar() {
  const paginationVar = reactive({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })

  return paginationVar
}
