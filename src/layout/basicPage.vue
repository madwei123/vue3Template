<template>
  <sliderbar />
  <div class="mainWrapper">
    <header-cpn />
    <tabpanel />
    <router-view v-slot="{ Component, route }">
      <keep-alive v-if="shouldKeepAlive(route)">
        <component
          :is="Component"
          style="
            padding: 10px;
            background-color: #f6f8f9;
            height: calc(100vh - 99px);
            overflow-y: auto;
          "
        />
      </keep-alive>

      <template v-else>
        <component
          :is="Component"
          style="
            padding: 10px;
            background-color: #f6f8f9;
            height: calc(100vh - 99px);
            overflow-y: auto;
          "
        />
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import tabpanel from './tabpanel.vue'
import headerCpn from './header.vue'
import sliderbar from './sliderbar.vue'
import { ref, reactive, computed, toRefs } from 'vue'
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
const { isCollapse } = toRefs(menuStore)
const sliderWidth = computed(() => {
  return isCollapse.value ? '64px' : '266px'
})
function shouldKeepAlive(route) {
  return route?.meta?.keepAlive
}
</script>
<style lang="less" scoped>
.mainWrapper {
  position: relative;
  width: auto;
  min-height: 100%;
  margin-left: v-bind(sliderWidth);
}
</style>
