import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const isCollapse = ref<boolean>(false)
    function changeCollapse() {
      isCollapse.value = !isCollapse.value
    }
    const breadCrumb = ref<string[]>([])
    function setBreadCrumb(list: string[]) {
      breadCrumb.value = list
    }

    return { isCollapse, changeCollapse, breadCrumb, setBreadCrumb }
  },
  {
    persist: true
  }
)
