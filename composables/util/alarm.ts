import { ElMessage, ElNotification } from 'element-plus'

export const useAlarm = () => {
  const notify = (title:string, type:any, message:string, showClose:boolean, duration:number, offset:number) => {
    ElNotification({
      title,
      message,
      showClose,
      type,
      duration,
      offset
    })
  }

  const message = (type:any, message:string, showClose:boolean, duration:number, grouping:boolean) => {
    ElMessage({
      type,
      message,
      showClose,
      duration,
      grouping
    })
  }

  return {
    notify,
    message
  }
}
