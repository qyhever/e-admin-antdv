// import { Base64 } from 'js-base64'

const baseName = 'e-admin-antdv'
const TOKEN = `${baseName}-token`
const COLLAPSE = `${baseName}-collapse`

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