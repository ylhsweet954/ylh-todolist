export type TodoItem = {
  id: string
  content: string
  isDone: boolean
  createTime: string
  doneTime: string
  type?: string
}
export const greetings = [
  { start: 0, end: 7, message: '凌晨好' },
  { start: 7, end: 12, message: '早上好' },
  { start: 12, end: 13, message: '中午好' },
  { start: 13, end: 19, message: '下午好' },
  { start: 19, end: 24, message: '晚上好' }
]
