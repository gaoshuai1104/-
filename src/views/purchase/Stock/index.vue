<template>
<div class="box">
    <side></side>
  <el-table
  class="right"
    :data="tableData"
    style="width: 70%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属部门">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="申请人">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="供应商地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="需求原因">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品编码"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="数量"
      prop="desc">
    </el-table-column>
        <el-table-column label="状态">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">已入库</el-button>
       <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>

<el-dialog title="库存信息更改" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="商品" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="仓库区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择入库区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
      </template>
    </el-table-column>
    
  </el-table>
  </div>
</template>

<style lang="less" scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .box{
height: 100%;
}
.right{
    margin-left: 20%;
    position: absolute;
    top: 90px;
}
</style>
<style>
    #inp{
    width: 200px;
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: 300px;
}
.el-menu-item-group__title{
    background-color: rgb(84, 92, 100);
}
</style>
<script>
import side from "../../../components/side/index"
  export default {
            components: {
            side
      },
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '桌椅',
          category: '固定物资',
          desc: '1000',
          address: '上海市普陀区真北路',
          shop: '职工部',
          shopId: '王小虎'
        }, {
         id: '12987122',
          name: '桌椅',
          category: '固定物资',
          desc: '1000',
          address: '上海市普陀区真北路',
          shop: '职工部',
          shopId: '王小虎'
        }, {
          id: '12987122',
          name: '桌椅',
          category: '固定物资',
          desc: '1000',
          address: '上海市普陀区真北路',
          shop: '职工部',
          shopId: '王小虎'
        }, {
          id: '12987122',
          name: '桌椅',
          category: '固定物资',
          desc: '1000',
          address: '上海市普陀区真北路',
          shop: '职工部',
          shopId: '王小虎'
        }],
        search:'',
         dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '12987122',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    }
  }
</script>