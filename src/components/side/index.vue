<template>

<el-row class="tac">
  <el-col :span="4" width="100px">
    <el-menu
    :default-active="this.$route.path" router
    unique-opened='true'
    collapse-transition='false'
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>申请管理</span>
        </template>
        <el-menu-item-group>
      <el-menu-item index="1-1">采购申请输入</el-menu-item>
      <el-menu-item index="1-2">采购申请管理</el-menu-item>
      </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>订单管理</span>
        </template>
            <el-menu-item-group>
      <el-menu-item index="2-1" @click="$router.push({path:'/OrderApply'})">订单申请输入</el-menu-item>
      <el-menu-item index="2-2" @click="$router.push({path:'/Orderquery'})">订单申请管理</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="$router.push({path:'/Receivinggoods'})">收货管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="$router.push({path:'/Stock'})">库存管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">开支分析</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">预算管理</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-menu"></i>
        <span slot="title">财务协同</span>
      </el-menu-item>
            <el-menu-item index="8">
        <i class="el-icon-menu"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
      //   if (keyPath == 1-1) {
      //   this.$router.push({ name: "Apply" });
      // }
      // if (keyPath == 1-2) {
      //   this.$router.push({ name: "query" });
      // }
      // if (key == 3) {
      //   this.$router.push({ name: "purchase" });
      // }
      // if (key == 4) {
      //   this.$router.push({ name: "equipment" });
      // }
      console.log(key, keyPath);
    },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    }
</script>
<style>
.tac{
  top: 80px;
  left: 0;
  position: fixed;
  background-color: rgb(84, 92, 100);
}
.el-submenu__title,.el-menu-item{
  width: 200px;
}
</style>
