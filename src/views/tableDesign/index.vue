<template>
  <div class="tabDesignWrapper">测试页</div>
  <div>
    {{ mkStore.formJson }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useMkStore } from '@/stores/mkform'

const mkStore = useMkStore()
</script>
<style lang="less" scoped>
.tabDesignWrapper {
}
</style>
