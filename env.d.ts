/// <reference types="vite/client" />
import { ComponentCustomProperties } from 'vue'
import ctip from '@/autoRegisterCpns/cpns/ctip.vue'
import cmodal from '@/autoRegisterCpns/cpns/cmodal.vue'
import fmdemo from '@/autoRegisterCpns/cpns/fmdemo.vue'
declare module '@/form-making-v3/dist/form-making-v3.es.js' {
  const FormMakingV3: any
  export default FormMakingV3
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formateTimeStr: (timestamp: number | string) => string
    ctip: typeof ctip
    cmodal: typeof cmodal
    fmdemo: typeof fmdemo
  }
}
