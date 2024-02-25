export type TodoItem = {
  id: string // 唯一标识
  content: string // todo内容
  isDone: boolean // 是否完成
  createTime: string //创建时间
  doneTime: string // 完成时间
  deadline?: string // 截止时间
  type?: string // 类型
  level?: number // 优先级，5为最高
}

// 问候语
export const greetings = [
  { start: 0, end: 7, message: '凌晨好' },
  { start: 7, end: 12, message: '早上好' },
  { start: 12, end: 13, message: '中午好' },
  { start: 13, end: 19, message: '下午好' },
  { start: 19, end: 24, message: '晚上好' }
]

// todo优先级
export const levels = [
  { level: 1, desc: '可做可不做', details: '可做可不做' },
  { level: 2, desc: '不着急做', details: '不着急做' },
  { level: 3, desc: '还行', details: '这周完成' },
  { level: 4, desc: '有点急', details: '这两天完成' },
  { level: 5, desc: '紧急', details: '今日完成' }
]
