<template>
  <div>
    <el-container>
      <el-header>
        <Appheader></Appheader>
      </el-header>
      <el-container>
        <el-aside width="230px">
          <Appaside></Appaside>
        </el-aside>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Appheader from "./Appheader/index.vue";
import Appaside from "./Appaside/index.vue";
import AppMain from "./AppMain/index.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Appheader,
    Appaside,
    AppMain,
  },
  methods: {},
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #2d3a4b;
  color: #fff;
  height: 60px;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #545c64;
  color: #fff;
}

.el-main {
  background-color: #e9eef3;
  background-color: #fff;
}
</style>
