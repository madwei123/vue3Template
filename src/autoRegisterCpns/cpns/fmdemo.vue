<template>
  <div style="height: 400px">
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </el-auto-resizer>
  </div>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="1000"
    v-model:current-page="currentPage"
    @current-change="loadPageData"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
const props = defineProps({
  test: String as () => string,
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  columns: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})

const emit = defineEmits(['on-load'])

const data = ref(props.modelValue)

const currentPage = ref(1)

const loadPageData = (index) => {
  // 通过 emit，可以将事件抛出到设计器中进行配置
  emit('on-load', index)
}

onMounted(() => {
  emit('on-load', currentPage.value)
})

watch(
  () => props.modelValue,
  (val) => {
    data.value = val
  }
)
</script>
