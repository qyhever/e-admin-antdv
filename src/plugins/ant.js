import {
  ConfigProvider,
  Button,
  Form,
  Input,
  Checkbox
} from 'ant-design-vue'

export default function(app) {
  app
    .use(ConfigProvider)
    .use(Button)
    .use(Form)
    .use(Input)
    .use(Checkbox)
}
