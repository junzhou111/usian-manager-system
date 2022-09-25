<template>
  <div>
    <router-link to="/">
      <div class="title">积云会员管理系统</div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ this.$store.getters.userInfo.name || "" }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="changpass">
            <i class="el-icon-edit"></i>修改密码
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <i class="el-icon-s-operation"></i> 退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods: {
    handleCommand(command) {
      switch (command) {
        case "changpass":
          this.handlechangepass();
          break;
        case "logout":
          this.handlelogout();
          break;
      }
    },
    handlechangepass() {
      alert("修改密码");
    },
    handlelogout() {
      alert("退出登录");
    },
  },
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
.title {
  color: white;
  padding: 0 0 0 20px;
  display: inline-block;
}

.el-dropdown {
  float: right;
  padding: 0 20px 0 0;
  color: #fff;
}
</style>
