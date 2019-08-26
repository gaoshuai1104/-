<template>

<el-row class="tac">
  <el-col :span="4" width="100px">
    <el-menu
    :default-active="$route.path" router
    :collapse-transition=false
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>采购申请管理</span>
        </template>
        <el-menu-item-group>
      <el-menu-item index="/Apply">采购申请输入</el-menu-item>
      <el-menu-item index="/query">采购申请查询</el-menu-item>
      </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>采购订单管理</span>
        </template>
            <el-menu-item-group>
      <el-menu-item index="/OrderApply" >输入采购订单</el-menu-item>
      <el-menu-item index="/Orderquery" >采购订单列表</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item disabled index="/Receivinggoods">
        <i class="el-icon-menu"></i>
        <span slot="title">收货管理</span>
      </el-menu-item> -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>采购入库管理</span>
        </template>
            <el-menu-item-group>
      <el-menu-item index="/warehousingApply" >输入采购入库</el-menu-item>
      <el-menu-item index="/warehousingQuery" >查询采购入库</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
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
  top: 120px;
  left: 0;
  position: fixed;
  background-color: rgb(84, 92, 100);
}
.el-submenu__title,.el-menu-item{
  width: 200px;
}
</style>
