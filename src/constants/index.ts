export const shortcuts = {
  快乐假期: [1629216000000, 1631203200000] as const,
  近2小时: () => {
    const cur = new Date().getTime()
    return [cur - 2 * 60 * 60 * 1000, cur] as const
  }
}

// 问候语
export const greetings = [
  { start: 0, end: 7, message: '凌晨好' },
  { start: 7, end: 12, message: '早上好' },
  { start: 12, end: 13, message: '中午好' },
  { start: 13, end: 19, message: '下午好' },
  { start: 19, end: 24, message: '晚上好' }
]
