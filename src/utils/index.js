export const getRandomStr = () => {
  return new Date().getTime() + Math.random().toString(16).slice(2)
}
