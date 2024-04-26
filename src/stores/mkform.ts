import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMkStore = defineStore('mkform', () => {
  const formJson = ref('')

  function setJson(v: string) {
    formJson.value = v
  }

  return { formJson, setJson }
})
