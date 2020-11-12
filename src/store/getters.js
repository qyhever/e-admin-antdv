const getters = {
  collapsed: state => state.app.collapsed,
  user: state => state.user.currentUser,
  resourceList: state => state.user.resourceList
}
export default getters
