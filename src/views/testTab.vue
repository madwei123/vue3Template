<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div class="testTabWrapper">
    <div>
      <baseTable
        :tableData="tableData"
        :columns="columns"
        v-model:pageSize="paginationVar.pageSize"
        v-model:currentPage="paginationVar.pageNum"
        :total="paginationVar.total"
      >
        <template #date="{ row, sn }">
          <el-button type="primary" size="small">{{ row[sn] }}</el-button>
        </template>
      </baseTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import baseTable from '@/components/baseTable.vue'
import headerTop from '@/components/headerTop.vue'
import { ref, reactive, computed } from 'vue'
// 导入模拟好的json数据
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const columns = ref([
  {
    prop: 'date',
    label: '发动机型号',
    width: '180',
    slotName: 'date'
  },
  {
    prop: 'name',
    label: '名称',
    width: '180'
  },
  {
    prop: 'name',
    label: '规定日历',
    width: '180'
  },
  {
    prop: 'name',
    label: '剩余日历',
    width: '180'
  },
  {
    prop: 'name',
    label: '控制日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '规定寿命',
    width: '180'
  },
  {
    prop: 'name',
    label: '剩余寿命',
    width: '180'
  },
  {
    prop: 'name',
    label: '开始小时',
    width: '180'
  },
  {
    prop: 'name',
    label: '当前步骤',
    width: '180'
  },
  {
    prop: 'name',
    label: '当前状态',
    width: '180'
  },
  {
    prop: 'name',
    label: '备注',
    width: '180'
  },
  {
    prop: 'address',
    label: '流程号'
  }
])
// 查询条件发出的事件
const events = {
  confirm: () => {
    console.log('confirm')
  },
  export: () => {
    console.log('export')
  },
  event1: () => {
    console.log('event1')
  },
  event2: () => {
    console.log('event2')
  },
  event3: () => {
    console.log('event3')
  },
  event4: () => {
    console.log('event4')
  },
  event5: () => {
    console.log('event5')
  }
}
const paginationVar = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 100
})
</script>
<style lang="less" scoped>
.testTabWrapper {
}
</style>
