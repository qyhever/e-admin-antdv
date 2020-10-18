<template>
  <div class="login">
    <div class="form-container">
      <div class="logo">
        <h1 class="title">登录</h1>
      </div>
      <a-form class="form" :model="form" :rules="rules" @finish="handleFinish">
        <a-form-item has-feedback name="userName">
          <a-input v-model:value="form.userName" placeholder="账号" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback name="password">
          <a-input type="password" v-model:value="form.password" placeholder="密码" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="form.remember">
            记住密码
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button class="submit-btn" type="primary" html-type="submit">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
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
      }
    }
  },
  mounted() {
    console.log()
  },
  methods: {
    handleFinish(values) {
      console.log(values)
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(-135deg, #00dbde, #fc00ff);
}
.form-container {
  width: 670px;
  border-radius: 6px;
  box-shadow: 0 0 100px rgba(255, 255, 255, 0.2);
  background-color: #fff;
  .logo {
    z-index: 1;
    position: relative;
    height: 180px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('~@/assets/images/login.jpg');
    border-radius: 6px 6px 0 0;
    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(54, 84, 99, 0.7);
      border-radius: 6px 6px 0 0;
    }
    .title {
      font-weight: 400;
      color: #fff;
      font-family: Microsoft Yahei;
      margin: 0;
    }
  }
  .form {
    padding: 50px 120px;
    /deep/ .ant-input {
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
      margin: 20px 0;
      background: linear-gradient(-135deg, #00dbde, #fc00ff);
      border: 0;
    }
  }
}
</style>
