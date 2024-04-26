import { ref } from 'vue'
import { defineStore } from 'pinia'
export const homeStore = defineStore('home', () => {
  const active = ref('/maintenance-plan/longevity-items')

  function setActiveFn(str: string) {
    active.value = str
  }

  return { active, setActiveFn }
})
