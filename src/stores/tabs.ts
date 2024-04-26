import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'
export const tabsStore = defineStore(
  'tabs',
  () => {
    const tabSet = ref<{ path: string; name: string }[]>([])
    const setTabs = (obj: { path: string; name: string }) => {
      tabSet.value.push(obj)
      tabSet.value = _.uniqBy([...tabSet.value, obj], 'path')
    }
    const getTabs = computed(() => tabSet.value)
    return { tabSet, setTabs, getTabs }
  },
  {
    persist: true
  }
)
