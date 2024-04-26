import moment from 'moment'

export function formateTimeStr(str: string | number, pattern?: string) {
  return moment(str).format(pattern || 'YYYY-MM-DD HH:mm:ss')
}
