import {
  ConfigProvider,
  message,
  Button,
  Form,
  Input,
  Checkbox,
  Row,
  Layout,
  Menu,
  Dropdown,
  Avatar
} from 'ant-design-vue'

export default function(app) {
  const g = app.config.globalProperties

  app
    .use(ConfigProvider)
    .use(Button)
    .use(Form)
    .use(Input)
    .use(Checkbox)
    .use(Row)
    .use(Layout)
    .use(Menu)
    .use(Dropdown)
    .use(Avatar)

  g.$message = message
}
