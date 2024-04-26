<template>
  <div class="headerTopWrapper"></div>
</template>

<script setup lang="ts">
import { useMkStore } from '@/stores/mkform'
import { ref, reactive, computed, defineEmits } from 'vue'
interface Iprops {
  jsonData: object
  isEdit: boolean
}
const props = withDefaults(defineProps<Iprops>(), {
  jsonData: () => ({}),
  isEdit: true
})
const MkStore = useMkStore()
// const jsonData = MkStore.formJson

const generateForm = ref(null)
defineExpose({
  generateForm
})
</script>
<style lang="less" scoped>
.headerTopWrapper {
}
</style>
