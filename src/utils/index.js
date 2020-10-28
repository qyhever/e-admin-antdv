/**
 * 生成随机字符串
 * @return {String} 字符串
 */
export const getRandomStr = () => {
  return new Date().getTime() + Math.random().toString(16).slice(2)
}
