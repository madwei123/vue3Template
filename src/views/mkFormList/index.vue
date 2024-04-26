<template>
  <div class="mkFormListWrapper">
    <el-row :gutter="20">
      <el-col :md="12"> </el-col>
      <el-col :md="12">
        <div class="d-flex j-end">
          <el-button type="primary" size="default" @click="newFormHandler"
            >新建</el-button
          >
        </div>
      </el-col>
    </el-row>
    <baseTable
      :tableData="tableData"
      :columns="columns"
      v-model:current-page="pagination.pageNum"
      v-model:page-size="pagination.pageSize"
      :total="pagination.total"
    >
    </baseTable>
    <cmodal :showBot="false" v-model="isShow" :otherOptions="otherOptions">
    </cmodal>
  </div>
</template>

<script setup lang="ts">
import baseTable from '@/components/baseTable.vue'
import { ref, reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useMkStore } from '@/stores/mkform'
import { usePaginationVar } from '@/hooks/usePagination'
// 导入模拟好的json数据
//定检管理的添加

defineOptions({
  name: 'mkFormList'
})
const customFields = reactive<
  { name: string; el: string; options: any; events: any }[]
>([
  {
    name: '分页数据列表',
    el: 'fmdemo',
    options: {
      defaultValue: [],
      labelWidth: 0,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      validator: '',
      extendProps: {
        columns: [] // 用于配置表格的列
      }
    },
    events: {
      onLoad: '' // 定义设计器可以配置的事件，处理组件 emit 的事件
    }
  }
])
const isShow = ref(false)
const otherOptions = reactive<{ [p: string]: any }>({
  fullscreen: true,
  title: '新建表单',
  destroyOnClose: true
})
// 新建表单的操作
function newFormHandler() {
  isShow.value = true
  otherOptions.title = '新建表单'
}

const tableData = []
const columns = ref([
  {
    prop: 'id',
    label: 'id',
    minWidth: '80'
  },
  {
    prop: 'json',
    label: 'formJson'
  },
  {
    label: '操作'
  }
])
// 获取表单设计器设计的json
const mkStore = useMkStore()
const fmRef = ref(null)
function storeData() {
  mkStore.setJson((fmRef.value as any)?.getJSON())
  isShow.value = false
  ElMessage({
    message: '保存成功',
    type: 'success'
  })
}
// 关于pagination的操作
const pagination = usePaginationVar()
</script>
<style lang="less" scoped>
.mkFormListWrapper {
}
</style>
