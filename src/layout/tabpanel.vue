<template>
  <div class="tab-wrap">
    <el-tabs
      v-model="activeTab"
      @tab-click="clickTab"
      type="border-card"
      class="custome-tabs"
      :closable="tabs.length != 1"
      @edit="removeTab"
    >
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="item.path"
        :label="item.name"
        :name="item.path"
      >
        <template #label>
          <el-dropdown
            :trigger="['contextmenu']"
            ref="dropdownRef"
            :id="item.name"
            @visible-change="handleChange($event, item.name)"
          >
            {{ item.name }}
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click="reload(item)"
                  :disabled="handDisabled('reload', item, index)"
                >
                  <el-icon> <Refresh /> </el-icon>重新刷新
                </el-dropdown-item>
                <el-dropdown-item
                  v-if="item.path != '/maintenance-plan/longevity-items'"
                  @click="closeMy(item)"
                  :disabled="handDisabled('closeMy', item, index)"
                >
                  <el-icon> <Close /> </el-icon>关闭当前</el-dropdown-item
                >
                <el-dropdown-item
                  v-if="tabs.length > 1"
                  @click="closeOther(item)"
                  :disabled="handDisabled('closeOther', item, index)"
                >
                  <el-icon> <Remove /> </el-icon>关闭其他</el-dropdown-item
                >
                <el-dropdown-item
                  v-if="tabs.length > 1"
                  @click="closeAll(item)"
                  :disabled="handDisabled('closeAll', item, index)"
                >
                  <el-icon> <Minus /> </el-icon>关闭全部</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { tabsStore } from '@/stores/tabs'
import { homeStore } from '@/stores/home'
import { useRoute, useRouter } from 'vue-router'
import { useSelf } from '@/hooks/useSelf'
import { computed, onMounted, reactive, ref, toRef, watch } from 'vue'
import { Close, Minus, Refresh } from '@element-plus/icons-vue'
const self = useSelf()
const router = useRouter()
const route = useRoute()
const tabsSt = tabsStore()
const { active, setActiveFn } = homeStore()
const homePage = {
  name: '测试页',
  path: '/testtab'
}
//tabs默认选项卡
const activeTab = ref(active)

const tabs = computed(() => {
  if (tabsSt.getTabs.length == 0) {
    tabsSt.setTabs(homePage)
  }
  return tabsSt.getTabs
})

//设置tabs选项卡
const setActive = () => {
  activeTab.value = route.path
}

const removeTab = (targetName: any) => {
  if (targetName === '/maintenance-plan/longevity-items') {
    return
  }
  const tablist = tabs.value
  let activeName = activeTab.value
  if (activeName === targetName) {
    tablist.forEach((tab: any, index: any) => {
      if (tab.path === targetName) {
        const nextTab = tablist[index + 1] || tablist[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
  activeTab.value = activeName
  const filterArr = tablist.filter((tab: any) => tab.path !== targetName)
  tabsSt.tabSet = []
  filterArr.map((v) => {
    tabsSt.setTabs(v)
  })

  router.push({ path: activeName })
}

const clickTab = (tab: any) => {
  const { props } = tab
  router.push({ path: props.name })
}

const reload = (item: any) => {
  router.go(0)
}

const closeMy = (item: any) => {
  removeTab(item.path)
}
const closeOther = (item: any) => {
  tabsSt.tabSet = []
  tabsSt.setTabs(homePage)
  const { name, path } = item
  let oldTabs: any = []
  tabs.value.forEach((element: any) => {
    oldTabs.push(element.path)
  })
  if (!oldTabs.includes(path)) {
    tabs.value.push({ name: name as any, path })
  }
}

const closeAll = (item: any) => {
  tabsSt.tabSet = []
  tabsSt.setTabs(homePage)
  router.push('/maintenance-plan/longevity-items')
}

const dropdownRef = ref()
const handleChange = (visible: boolean, name: string) => {
  if (!visible) return
  dropdownRef.value.forEach((item: { id: string; handleClose: () => void }) => {
    if (item.id === name) return
    item.handleClose()
  })
}

const handDisabled = (action: string, data: any, index: any) => {
  if (action == 'reload') {
    return route.path != data.path
  }
  if (action == 'closeMy') {
    return route.path != data.path
  }
  if (action == 'closeOther') {
    return route.path != data.path
  }
  return false
}

const addTab = () => {
  const { meta, path } = route
  let newTab: any = []
  tabs.value.forEach((element: any) => {
    newTab.push(element.path)
  })

  if (!newTab.includes(path)) {
    tabs.value.push({ name: meta.title as string, path })
  }
}

watch(
  () => route.path,
  () => {
    setActive()
    addTab()
  }
)

const beforeRefresh = () => {
  window.addEventListener('beforeunload', () => {
    console.info('beforeunload...')
  })
}

onMounted(() => {
  beforeRefresh()
  setActive()
})
</script>

<style lang="less">
.tab-wrap {
  border-top: 1px solid #dcdfe6;
  padding: 0 10px;
  .custome-tabs {
    border: none;
    border-radius: 5px;
  }

  .el-tabs--border-card > .el-tabs__content {
    padding: 0px;
  }

  .el-tabs__item {
    font-size: 8px;
    font-weight: 1;
    padding: 0 8px;
  }
}
</style>
