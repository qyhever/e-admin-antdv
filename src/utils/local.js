import { Base64 } from 'js-base64'

const baseName = 'e-admin-antdv'
const TOKEN = `${baseName}-token`
const COLLAPSE = `${baseName}-collapse`
const REMEMBER_LOGIN_USER = `${baseName}-remember-user`
const TAG_NAV = `${baseName}-tag-nav`

export const setToken = token => {
  return localStorage.setItem(TOKEN, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
  return localStorage.removeItem(TOKEN)
}
export const setCollapse = value => {
  return localStorage.setItem(COLLAPSE, value)
}
export const getCollapse = () => {
  return JSON.parse(localStorage.getItem(COLLAPSE))
}

export const setRememberUser = (data) => {
  const enText = Base64.encode(JSON.stringify(data))
  return localStorage.setItem(REMEMBER_LOGIN_USER, enText)
}

export const getRememberUser = () => {
  const enText = localStorage.getItem(REMEMBER_LOGIN_USER)
  if (!enText) {
    return null
  }
  let data = null
  try {
    const deText = Base64.decode(enText)
    data = JSON.parse(deText)
  } catch (err) {
    console.log(err)
    removeRememberUser()
  }
  return data
}

export const removeRememberUser = () => {
  return localStorage.removeItem(REMEMBER_LOGIN_USER)
}

export const setTagNav = (data) => {
  return localStorage.setItem(TAG_NAV, JSON.stringify(data))
}

export const getTagNav = () => {
  try {
    const data = localStorage.getItem(TAG_NAV)
    return JSON.parse(data)
  } catch (err) {
    console.log(err)
    return null
  }
}

export const removeTagNav = () => {
  return localStorage.removeItem(TAG_NAV)
}
