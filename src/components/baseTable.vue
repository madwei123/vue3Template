<template>
  <div class="basicPageWraper">
    <el-table
      :data="tableData"
      style="width: 100%"
      v-on="eventCollections"
      :element-loading-text="elementLoadingText"
      :element-loading-background="elementLoadingBackground"
      v-bind="otherOptionsT"
      v-loading="loading"
    >
      <el-table-column
        type="selection"
        width="55"
        v-if="props.isShowSelection"
      />
      <el-table-column type="index" width="55" v-if="props.isShowIndexColumn" />
      <template v-for="(item, index) in columns" :key="index">
        <el-table-column v-bind="item">
          <template #default="{ row }">
            <slot :name="item.slotName" :row="row" :sn="item.prop">
              <span>{{ row[item.prop] }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="bottom d-flex j-end bot">
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        background
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageSizes"
        :total="props.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-bind="props.otherOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  toRefs,
  computed,
  defineEmits,
  getCurrentInstance
} from 'vue'
const instance = getCurrentInstance()
const self = instance ? instance.proxy : null
// console.log('instance', self)
const emit = defineEmits([
  'update:currentPage',
  'update:pageSize',
  'refreshList',
  'select',
  'selectAll',
  'selectionChange',
  'cellMouseEnter',
  'cellMouseLeave',
  'cellClick',
  'cellDblclick',
  'cellContextmenu',
  'rowClick',
  'rowContextmenu',
  'rowDblclick',
  'headerClick',
  'headerContextmenu',
  'sortChange',
  'filterChange',
  'currentChange',
  'headerDragend',
  'expandChange'
])
// 定义 props
type Iprops = {
  isShowSelection?: boolean
  isShowIndexColumn?: boolean
  columns: any[]
  tableData: any[]
  currentPage: number
  pageSize: number
  total?: number
  pageSizes?: number[]
  otherOptions?: any
  otherOptionsT?: any
  loading?: boolean
  elementLoadingText?: string
  elementLoadingBackground?: string
}
// 设置默认值
const props = withDefaults(defineProps<Iprops>(), {
  isShowSelection: true,
  isShowIndexColumn: false,
  elementLoadingText: '努力加载中...',
  elementLoadingBackground: 'rgba(122, 122, 122, 0.8)',
  loading: false,
  total: 0,
  columns: () => [],
  tableData: () => [],
  pageSizes: () => [10, 20, 50, 100]
})
// 关于pagination的操作

const currentPage = computed({
  get: () => props.currentPage,
  set: (val) => {
    emit('update:currentPage', val)
  }
})
const pageSize = computed({
  get: () => props.pageSize,
  set: (val) => {
    emit('update:pageSize', val)
  }
})
// 解构 props
const { tableData, columns } = toRefs(props)
// 表格的事件
const eventCollections = {
  select<T = any>(selection: T[], row: T) {
    console.log('select', selection)
    emit('select', selection)
  },
  selectAll(selection: any[]) {
    console.log('selectAll', selection)
    emit('selectAll', selection)
  },
  selectionChange(selection: any[]) {
    console.log('selectionChange', selection)
    emit('selectionChange', selection)
  },
  sortChange(data: { column: any; prop: string; order: any }) {
    console.log('sortChange', data)
    return emit('sortChange', data)
  }
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  pageSize.value = val
  emit('refreshList')
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)

  currentPage.value = val
  emit('refreshList')
}
</script>
<style lang="less" scoped>
.basicPageWraper {
  .bot {
    padding-top: 20px;
  }
}
</style>
