<template>
  <div class="headerWrapper">
    <div class="navbar-container d-flex">
      <div class="flex-1 d-flex">
        <div class="d-flex a-center">
          <el-icon size="16px" v-if="!isCollapse" @click="changeCollapse"
            ><Fold
          /></el-icon>
          <el-icon size="16px" v-else @click="changeCollapse"
            ><Expand
          /></el-icon>
          <div style="margin-left: 20px">
            <el-breadcrumb separator=">">
              <el-breadcrumb-item v-for="v in breadCrumb" :key="v">{{
                v
              }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </div>
      <div class="flex-1 d-flex j-end">
        <div class="d-flex j-end a-center">
          <el-dropdown>
            <span class="el-dropdown-link">
              当前用户<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="SwitchButton" @click="loginout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, toRefs } from 'vue'
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
const { isCollapse, changeCollapse, breadCrumb } = toRefs(menuStore)
function loginout() {
  window.close()
}
</script>
<style lang="less" scoped>
.headerWrapper {
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .navbar-container {
    position: relative;
    height: 60px;
    padding-right: 20px;
    padding-left: 20px;
    overflow: hidden;
    user-select: none;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
}
</style>
