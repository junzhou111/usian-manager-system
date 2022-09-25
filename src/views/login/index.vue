<template>
  <div class="login">
    <div class="login-box">
      <div class="box">
        <h1 class="tilte">积云后台管理</h1>
        <el-form ref="form" :model="form" label-width="60px">
          <el-form-item label="账号">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">取消</el-button>
          </el-form-item>
        </el-form>
        <!-- <input
          class="username"
          type="text"
          v-model="from.username"
          placeholder="username"
        />
        <input
          class="password"
          type="text"
          v-model="from.password"
          placeholder="password"
        />
        <button class="btn" @click="tolog">登录</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import newdata from "../../api/text";
export default {
  name: "App",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      // from: {
      //   username: "",
      //   password: "",
      // },
      page: 1,
      size: 10,
      obj: {
        birthday: "",
        cardNum: "",
        name: "",
        payType: "",
      },
    };
  },
  components: {},
  created() {
    newdata
      .getNewlist(this.page, this.size, this.obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    newdata
      .getNewgongying()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    tolog() {},
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
