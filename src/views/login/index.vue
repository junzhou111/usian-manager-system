<template>
  <div class="login">
    <div class="login-box">
      <div class="box">
        <h1 class="tilte">积云后台管理</h1>
        <el-form ref="form" :model="form" label-width="60px" :rules="rules">
          <el-form-item label="账号" prop="username">
            <el-input v-model.trim="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model.trim="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLoginSubmit"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import newdata from "../../api/text";
import { login } from "../../api/user";
export default {
  name: "App",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 12, message: "请输入3-12个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  components: {},
  created() {},
  methods: {
    // 点击登录
    handleLoginSubmit() {
      // 对表单进行校验
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        this.handleLogin();
      });
    },
    // 登陆效果
    async handleLogin() {
      try {
        const response = await login(this.form);
        console.log(response);
        console.log("token", response.token);
      } catch (e) {
        console.log(e.message);
      }
    },
  },

  computed: {},
};
</script>
<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}

.login {
  width: 100vw;
  height: 100vh;
  background-image: url(http://vue.mengxuegu.com/img/login.b665435f.jpg);
  background-size: 100% 100%;
  overflow: hidden;

  .login-box {
    width: 500px;
    height: 300px;
    background-color: #fff;
    margin: 200px auto;
    border-radius: 15px;

    .tilte {
      width: 100%;
      text-align: center;
      padding: 20px 0 20px 0;
      font-size: 20px;
      font-weight: 900;
    }

    .box {
      width: 80%;
      margin: 0 auto;
      height: 100%;
    }

    .username,
    .password {
      width: 100%;
      margin: 20px auto;
      height: 30px;
      padding: 0 0 0 10px;
    }

    .btn {
      width: 100%;
      height: 50px;
      background-color: rgb(108, 190, 244);
      border: 1px solid rgb(108, 190, 244);
      color: #fff;
      border-radius: 5px;
      font-size: 18px;
    }
  }
}
</style>
