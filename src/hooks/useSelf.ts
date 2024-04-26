import { getCurrentInstance } from 'vue'

export function useSelf() {
  const instance = getCurrentInstance()
  const self = instance ? instance.proxy : null
  return self
}
