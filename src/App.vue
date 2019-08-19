<template>
  <div id="app">
    <el-container v-if="$route.meta.keepAlive">
      <el-header>
        <keep-alive>
          <!-- 导航栏 -->
          <header-nav></header-nav>
        </keep-alive>
      </el-header>
      <!-- <el-container>
        <el-aside width="250px"> -->
         <!-- 侧边栏  -->
          <!-- <keep-alive>
            <left></left>
          </keep-alive>
        </el-aside> -->
        <el-main>
          <!-- Body  -->
          <router-view></router-view>
        </el-main>
      <!-- </el-container> -->
    </el-container>

    <!-- 登录页 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import headerNav from "./components/header/index";
export default {
  data() {
    return {};
  },
  components: {
    headerNav : headerNav
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin: 0;
  padding: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
