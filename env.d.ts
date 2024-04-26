/// <reference types="vite/client" />
import { ComponentCustomProperties } from 'vue'
import ctip from '@/autoRegisterCpns/cpns/ctip.vue'
import cmodal from '@/autoRegisterCpns/cpns/cmodal.vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formateTimeStr: (timestamp: number | string) => string
    ctip: typeof ctip
    cmodal: typeof cmodal
  }
}
