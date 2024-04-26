<template>
  <div class="headerTopWrapper">
    <fm-generate-form
      :data="props.jsonData"
      ref="generateForm"
      v-on="events"
      :edit="isEdit"
    ></fm-generate-form>
  </div>
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
// 预留的发射的事件
const emit = defineEmits([
  'search',
  'confirm',
  'cancel',
  'export',
  'reset',
  'add',
  'del',
  'modify',
  'copy',
  'event1',
  'event2',
  'event3',
  'event4',
  'event5',
  'event6',
  'event7',
  'event8',
  'event9',
  'event10',
  'event11',
  'event12',
  'event13',
  'event14',
  'event15',
  'event16',
  'event17',
  'event18',
  'event19',
  'event20'
])
const events = {
  search(d) {
    emit('search', d)
  },
  confirm(d) {
    emit('confirm', d)
  },
  cancel(d) {
    emit('cancel', d)
  },
  export(d) {
    emit('export', d)
  },
  reset(d) {
    emit('reset', d)
  },
  add(d) {
    emit('add', d)
  },
  modify(d) {
    emit('modify', d)
  },
  del(d) {
    emit('del', d)
  },
  copy(d) {
    emit('copy', d)
  },
  event1(d) {
    emit('event1', d)
  },
  event2(d) {
    emit('event2', d)
  },
  event3(d) {
    emit('event3', d)
  },
  event4(d) {
    emit('event4', d)
  },
  event5(d) {
    emit('event5', d)
  },
  event6(d) {
    emit('event6', d)
  },
  event7(d) {
    emit('event7', d)
  },
  event8(d) {
    emit('event8', d)
  },
  event9(d) {
    emit('event9', d)
  },
  event10(d) {
    emit('event10', d)
  },
  event11(d) {
    emit('event11', d)
  },
  event12(d) {
    emit('event12', d)
  },
  event13(d) {
    emit('event13', d)
  },
  event14(d) {
    emit('event14', d)
  },
  event15(d) {
    emit('event15', d)
  },
  event16(d) {
    emit('event16', d)
  },
  event17(d) {
    emit('event17', d)
  },
  event18(d) {
    emit('event18', d)
  },
  event19(d) {
    emit('event19', d)
  },
  event20(d) {
    emit('event20', d)
  }
}
const generateForm = ref(null)
defineExpose({
  generateForm
})
</script>
<style lang="less" scoped>
.headerTopWrapper {
}
</style>
