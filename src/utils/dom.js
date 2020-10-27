/**
 * 打开文件选择框
 * @return {Promise<File>} Promise
 */
export function createImageFileInput() {
  return new Promise(resolve => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.onchange = e => {
      const file = e.target.files[0]
      resolve(file)
    }
    input.click()
    input.remove()
  })
}

/**
 * 让任意元素滚动到指定位置
 * @param  {HTMLElement} el 元素
 * @param  {Number} from 开始位置
 * @param  {Number} to 结束位置
 * @param  {Number} duration 使用时间
 * @param  {Function} endCallback 完成后回调
 * @example scrollTo(window, window.pageYOffset, 0, 1000)
 */ 
export function scrollTo(el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}

/**
 * 字符串去除空格
 * @param {String} string 字符串
 * @return {String} 字符串
 */
function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * 元素是否拥有某个类名
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 * @return {Boolean} 结果
 */
export function hasClass(el, cls) {
  if (!el || !cls) {
    return false
  }
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  }
  return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
}

/**
 * 元素添加类名
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 * @return {void}
 */
export function addClass(el, cls) {
  if (!el) {
    return
  }
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) {
      continue
    }

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/**
 * 元素移除类名
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 * @return {void}
 */
export function removeClass(el, cls) {
  if (!el || !cls) {
    return
  }
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) {
      continue
    }

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
