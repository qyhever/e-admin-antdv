<template>
  <div class="login">
    <aside class="aside"></aside>
    <div class="form-container">
      <div class="logo">
        <img class="image" src="@/assets/images/logo.png">
        <h1 class="title">Ant Simple Pro</h1>
      </div>
      <a-form class="form" :model="form" :rules="rules" @finish="handleFinish">
        <a-form-item has-feedback name="userName">
          <a-input v-model:value="form.userName" placeholder="账号" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback name="password">
          <a-input type="password" v-model:value="form.password" placeholder="密码" autocomplete="off" />
        </a-form-item>
        <a-form-item name="remember">
          <a-checkbox v-model:checked="form.remember">
            记住密码
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            class="submit-btn"
            type="primary"
            html-type="submit"
            size="large"
            :loading="loading"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { login } from './service'
import {
  getRememberUser,
  setRememberUser,
  removeRememberUser,
  setToken
} from '@/utils/local'
export default {
  data() {
    return {
      form: {
        userName: '',
        password: '',
        remember: false
      },
      rules: {
        userName: [ { required: true, message: '请输入用户名!' } ],
        password: [ { required: true, message: '请输入密码!' } ]
      },
      loading: false
    }
  },
  mounted() {
    const rememberUser = getRememberUser()
    if (rememberUser) {
      this.form = rememberUser
    }
  },
  methods: {
    async handleFinish(values) {
      if (values.remember) {
        setRememberUser(values)
      } else {
        removeRememberUser()
      }
      const params = {
        userName: values.userName,
        password: md5(md5(values.password))
      }
      try {
        const response = await login({
          loadingCb: loading => (this.loading = loading),
          data: params
        })
        setToken(response.token)
        this.$router.push('/')
        this.$message.destroy()
        this.$message.success('登录成功')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  display: flex;
  // justify-content: center;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  background: #f0f2f5;
  &:before, &:after {
    content: "";
  }
}
.aside {
  width: 46vw;
  height: 85vh;
  background: url("~@/assets/images/login.png") no-repeat;
  background-size: contain;
}
.form-container {
  width: 480px;
  padding: 64px;
  border-radius: 6px;
  box-shadow: 0 0 40px 0 rgba(24, 144, 255, 0.1);
  background-color: #fff;
  .logo {
    display: flex;
    justify-content: center;
    .image {
      width: 36px;
      height: 36px;
      margin-right: 10px;
    }
    .title {
      color: @color-theme;
    }
  }
  .form {
    ::v-deep .ant-input {
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-radius: 0;
      &:focus {
        box-shadow: 0 0 0 0 rgba(52, 111, 255, 0.2);
      }
    }
    .submit-btn {
      width: 100%;
      height: 48px;
      margin: 20px 0;
      border: 0;
    }
  }
}
</style>
