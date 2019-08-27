<template>
<div>
  <div id="logo">
    <img class="pty" src="../../../static/pty.png" alt="">
     <h3>中国浦东干部管理学院欢迎您!</h3>
  </div>
  <el-menu
    id="bg-top"
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
  <el-menu-item index="1"><i class="el-icon-s-cooperation"></i>采购管理</el-menu-item>
  <el-menu-item index="3"><i class="el-icon-s-cooperation"></i>平安校园</el-menu-item>
    <el-submenu index="2">
    <template slot="title"><i class="el-icon-s-cooperation"></i>资产管理</template>
    <el-menu-item index="2-1">资产台账</el-menu-item>
    <el-menu-item index="2-2">资产卡片</el-menu-item>
    <el-menu-item index="2-3">资产空间分布</el-menu-item>
    <el-menu-item index="2-4">资产查询盘点</el-menu-item>
    <el-menu-item index="2-5">资产关联影响</el-menu-item>
    <el-menu-item index="2-6">资产预算管理</el-menu-item>
    <el-menu-item index="2-7">资产成本分析</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
    <template slot="title"><i class="el-icon-s-cooperation"></i>设备运维</template>
    <el-menu-item index="4-1">设备状态指标</el-menu-item>
    <el-menu-item index="4-2">故障维修</el-menu-item>
    <el-menu-item index="4-3">计划性维护</el-menu-item>
    <el-menu-item index="4-4">预防性维护</el-menu-item>
    <el-menu-item index="4-5">设备维护电子档案</el-menu-item>
    <el-menu-item index="4-6">运维费用统计</el-menu-item>
    <el-menu-item index="4-7">模拟演示</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
    <template slot="title"><i class="el-icon-s-cooperation"></i>绿色校园</template>
    <el-menu-item index="5-1">能效管理</el-menu-item>
    <el-menu-item index="5-2">绿色建筑</el-menu-item>
    <el-menu-item index="5-3">垃圾管理</el-menu-item>
    <el-menu-item index="5-4">绿植管理</el-menu-item>
    </el-submenu>
        <el-submenu index="6">
    <template slot="title"><i class="el-icon-s-cooperation"></i>停车管理</template>
    <el-menu-item index="6-1">车位信息</el-menu-item>
    <el-menu-item index="6-2">车位引导</el-menu-item>
    <el-menu-item index="6-3">电子支付</el-menu-item>
    <el-menu-item index="6-4">车库运行统计</el-menu-item>
    <el-menu-item index="6-5">异常车辆识别</el-menu-item>
    </el-submenu>
            <el-submenu index="7">
    <template slot="title"><i class="el-icon-s-cooperation"></i>空间管理</template>
    <el-menu-item index="7-1">空间清册</el-menu-item>
    <el-menu-item index="7-2">空间查询</el-menu-item>
    <el-menu-item index="7-3">空间占用</el-menu-item>
    <el-menu-item index="7-4">费用分摊</el-menu-item>
    </el-submenu>
  </el-menu>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      dayjs,
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      if (keyPath == 1) {
        this.$router.push({ name: "Apply" });
      }
      // if (key == 2) {
      //   this.$router.push({ name: "property" });
      // }
      if (key == 3) {
        this.$router.push({ name: "Admission" });
      }
      // if (key == 4) {
      //   this.$router.push({ name: "equipment" });
      // }
      // if (key == 5) {
      //   this.$router.push({ name: "greenshcoll" });
      // }
      // if (key == 6) {
      //   this.$router.push({ name: "stop" });
      // }
      // if (key == 7) {
      //   this.$router.push({ name: "work" });
      // }
    }
    // rout(index){
    //   if(index==1){
    //     this.$router.push({ name: "home" });
    //   }
    // }
  }
};
</script>
<style lang="less">
#bg-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 80px;
  top: 40px;
  left:0;
  z-index: 10;
  width: 100%;
  color: #8791a2;
  background: #0a2549;
}
#logo{
  position: fixed;
  top:0;
  background-color: #fff;
  z-index: 10;
  width: 100%;
  h3{
    float: right;
    margin-right: 40px;
    line-height: 10px;
  }
}
.pty{
  height: 40px;
  float: left;
}
.righ{
  z-index: 11;
  float: right;
  margin-right: 60px;
}
.time{
  line-height: 40px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
