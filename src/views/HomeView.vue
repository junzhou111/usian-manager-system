<template>
  <div class="home">
    <el-container class="home-box">
      <el-header>
        <div class="left">积云后台管理</div>
        <div class="right el-icon-arrow-down"></div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created() {
    this.$axios({
      url: '/dev-api/',
      method: "GET"
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;

}

.home-box {
  height: 100vh;
}

.el-header {
  background-color: #2d3a4b;
  color: #fff;
  padding: 0 !important;
  display: flex;
  justify-content: space-between;

  div {
    height: 60px;
    margin: 0 20px;
    line-height: 60px;
  }

}

.el-aside {
  background-color: #545c64;
  color: #fff;

}

.el-main {
  background-color: #fff;
  padding: 0 !important;


}
</style>