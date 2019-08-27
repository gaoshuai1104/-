<template>

<el-row class="tac">
  <el-col :span="4" width="100px">
    <el-menu
    :default-active="$route.path" router
    :collapse-transition=false
    default-openeds=[1]
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>出入管理</span>
        </template>
        <div class="child">
        <el-menu-item-group>
      <el-menu-item index="/Admission">入校登记</el-menu-item>
      <el-menu-item index="/Leavingschool">离校登记</el-menu-item>
      <el-menu-item index="/list">访客列表</el-menu-item>
      <el-menu-item index="/information">访客信息</el-menu-item>
      </el-menu-item-group>
      </div>
      </el-submenu>
      <el-menu-item index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>智慧门禁</span>
        </template>
      </el-menu-item>
      <!-- <el-menu-item disabled index="/Receivinggoods">
        <i class="el-icon-menu"></i>
        <span slot="title">收货管理</span>
      </el-menu-item> -->
      <el-menu-item index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>安防监控</span>
        </template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">异情分析</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">应急模拟</span>
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
  left: -23px;
  position: fixed;
  background-color: rgb(84, 92, 100);
  height: 100%;
}
/* .el-submenu__title,.el-menu-item{
  width: 200px;
} */
.el-table td, .el-table th.is-leaf{
  border-bottom: 1px solid rgb(84, 92, 100);
  border-left: 1px solid rgb(84, 92, 100);
}

.el-table{
  border: 1px solid rgb(84, 92, 100); 
}
.el-icon-arrow-down:before{
display: none;
}
</style>
