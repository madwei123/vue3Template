// 表格列的公共接口
export interface Icolumns {
  prop: string
  label: string
  sortable?: boolean | 'custom'
  slotName?: string
  width?: number | string
  [p: string]: any
}
