<template>
  <div class="sliderBarWrapper">
    <div class="title">
      <template v-if="!isCollapse"> 机务维修 </template>
      <div v-else style="height: 55px">
        <el-icon style="margin-right: 10px"><Menu /></el-icon>
      </div>
    </div>

    <el-menu
      :collapse="isCollapse"
      text-color="#b7bdc3"
      active-text-color="#1890FF"
      background-color="#282c34"
      :default-active="defaultActive"
      unique-opened
    >
      <!-- 遍历整个菜单 -->
      <template
        v-for="item in constantRoutes[0].children"
        :key="item.meta.id + ''"
      >
        <el-menu-item
          :index="item.meta!.id + ''"
          v-if="!item.children"
          @click="handleItemClick(item)"
        >
          <component :is="item.meta?.icon" style="width: 16px"></component>
          <template #title
            ><span style="margin-left: 10px">{{
              item.meta?.title
            }}</span></template
          >
        </el-menu-item>
        <el-sub-menu :index="item.meta!.id + ''" v-else>
          <template #title>
            <component :is="item.meta?.icon" style="width: 16px"></component>
            <span style="margin-left: 10px">{{ item.meta?.title }}</span>
          </template>

          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item
              :index="subitem.meta!.id + ''"
              @click="handleItemClick(subitem)"
            >
              {{ subitem.meta?.title }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { constantRoutes } from '@/router/constantRoute'
import { ref, reactive, computed, toRefs, watchEffect, toRaw } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { useMenuStore } from '@/stores/menu'
import type { Writable } from 'stream'
defineOptions({
  name: 'sliderbarPage'
})
const menuStore = useMenuStore()
const { isCollapse, setBreadCrumb } = toRefs(menuStore)
// slider的动态宽度
const sliderWidth = computed(() => {
  return isCollapse.value ? '64px' : '266px'
})
// 路由导航
const router = useRouter()
function handleItemClick(p) {
  router.push(p.path)
}
// 默认的active
const defaultActive = ref('1-1')
const route = useRoute()
watchEffect(
  () => {
    defaultActive.value = route.meta.id + ''
    const showRoute: RouteRecordRaw[] = router.options.routes[0]['children']
    // 递归变遍历找出与当前的路由路径相同的路由返回meta中title,如果有父级,也把父级的title返回,放到一个数组中
    const findRoute = (
      route: RouteRecordRaw[],
      path: string,
      parent?: RouteRecordRaw
    ) => {
      let titleArr: string[] = []
      route.forEach((item) => {
        if (item.path === path) {
          titleArr.push((item.meta as any).title)
          if (parent) {
            titleArr.push((parent.meta as any).title)
          }
        } else if (item.children) {
          titleArr = titleArr.concat(findRoute(item.children, path, item))
        }
      })

      return titleArr
    }

    setBreadCrumb.value(findRoute(showRoute, toRaw(route).path).reverse())
  },
  {
    flush: 'post'
  }
)
</script>
<style lang="less" scoped>
.sliderBarWrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: v-bind(sliderWidth);
  z-index: 999;
  height: 100vh;
  overflow: hidden;
  background: #282c34;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .title {
    display: flex;
    overflow: hidden;
    font-size: 18px;
    line-height: 55px;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    max-width: 206px;
    justify-content: center;
  }
  ::v-deep(.el-menu) {
    border-right: none;
  }
}
</style>
