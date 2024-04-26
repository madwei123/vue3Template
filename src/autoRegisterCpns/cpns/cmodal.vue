<template>
  <el-dialog
    :model-value="props.modelValue"
    @update:modelValue="changeVisible"
    :width="props.width"
    v-bind="otherOptions"
  >
    <slot> 我是默认展示的内容 </slot>
    <template #footer v-if="showBot">
      <slot name="footerBtnBox">
        <div class="dialog-footer">
          <el-button type="default" @click="$emit('update:modelValue', false)">
            取消</el-button
          >
          <el-button type="primary" @click="changeVisible1"> 确认</el-button>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

type Iobj = {
  [p: string]: any
}
interface IProps {
  modelValue: boolean
  width?: string | number
  otherOptions?: Iobj
  showBot?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  width: '500',
  showBot: true
})
const emit = defineEmits(['update:modelValue', 'sure'])
function changeVisible(d) {
  emit('update:modelValue', d)
}

function changeVisible1() {
  emit('update:modelValue', false)
  emit('sure')
}
</script>
<style lang="less" scoped>
.cmodalWrapper {
}
</style>
