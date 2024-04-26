<template>
  <div class="ctipWrapper">
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="props.text"
      placement="top-start"
    >
      <slot> {{ showWord }}</slot>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface IProps {
  text: string
  placement: TooltipPlacement
  length: number
}
type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
const props = withDefaults(defineProps<Partial<IProps>>(), {
  text: '这是一个提示',
  placement: 'top',
  length: 6
})
const showWord = computed(() => {
  if (props.text.length > props.length) {
    return props.text.slice(0, props.length) + '...'
  } else {
    return props.text
  }
})
</script>
<style lang="less" scoped>
.ctipWrapper {
}
</style>
