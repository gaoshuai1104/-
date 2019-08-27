<template>
    
<div class="box">
  <h2 class="titt">采购申请</h2>
    <side></side>
<el-form ref="form" :model="form" label-width="100px" class="right">
  <el-form-item label="申请时间">
  <span class="left"> {{dayjs().format('YYYY-MM-DD  HH:mm:ss')}} </span>
  </el-form-item>
   <el-form-item label="交付日期">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
   <el-form-item label="申请部门">
    <el-select v-model="form.region" placeholder="一级部门" class="use">
      <el-option label="联勤部" value="shanghai"></el-option>
      <el-option label="保障部" value="beijing"></el-option>
    </el-select>
    <div class="sel">
    <el-select v-model="form.region" placeholder="二级部门" class="use">
      <el-option label="XX部" value="shanghai"></el-option>
      <el-option label="XX部" value="beijing"></el-option>
    </el-select>
    </div>
  </el-form-item>
  <el-form-item label="申请人">
    <el-select v-model="form.region" placeholder="申请人" class="use">
      <el-option label="张三" value="shanghai"></el-option>
      <el-option label="李四" value="beijing"></el-option>
        <el-option label="王五" value="shanghai"></el-option>
      <el-option label="赵六" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="采购申请号">
  <span class="left"> 20190826093400001 </span>
  </el-form-item>

  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <div>
    
    <!-- <iframe src="https://www.baidu.com" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:80px;left: 120px;"></iframe> -->
  </div>
  <template>
  <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
      
    </el-table-column>
    
    <el-table-column
      label="商品编码"
      width="100">
            <input type="text" class="inp">
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="100">
<input type="text" class="inp">
    </el-table-column>
    <el-table-column
      prop=""
      label="供应商名称"
      width="100"
      show-overflow-tooltip>
           <input type="text" class="inp">
    </el-table-column>
    <el-table-column
      prop=""
      label="规格"
      width="100"
      show-overflow-tooltip>
           <input type="text" class="inp">
    </el-table-column>
    <el-table-column
      prop=""
      label="数量"
      width="100"
      show-overflow-tooltip>
           <input type="text" class="inp">
    </el-table-column>
    <el-table-column
      prop=""
      label="单价"
      width="100"
      show-overflow-tooltip>
           <input type="text" class="inp">
    </el-table-column>
    <el-table-column
      prop=""
      label="供应价"
      width="100"
      show-overflow-tooltip>
            <input type="text" class="inp">
    </el-table-column>
  </el-table>
</template>

  <el-form-item id="mag">
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>重新输入</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import side from "../../../components/side/index"
import dayjs from 'dayjs'
  export default {
      components: {
            side,  
      },
    data() {
      return {
        url1: '',
        dayjs,
        value1:'',
        input:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          user:''
        },
        tableData: [ {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },],
      }
    },
    methods: {
      
      onSubmit() {
        alert("申请已提交")
        this.form.name=""
        this.form.user=""
        this.form.region=""
        this.form.date1=""
        this.form.date2=""
          this.form.delivery=false
        this.form.type=[]
        this.form.resource=""
        this.form.desc=""
        this.form.user=""
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getdatatime(){//默认显示今天
      this.value1= new Date();
    },

    },
    mounted(){
      this.url1 = 'https://www.jb51.net/article/124153.htm'
    }
  }
</script>
<style lang="less" scoped>
.box{
height: 100%;
}
.titt{
margin-left: 270px;
  margin: 50px 0;
}
.left{
  float: left;
}
.right{
    margin-left: 25%;
    position: absolute;
    top: 180px;
}
.use{
  width: 150px;
  float: left;
}
.inp{
  border: none;
  height: 50px;
  outline:none;
}
#mag{
  margin-top: 40px;
}
</style>
<style>
  .sel{
    margin-left: 200px;
  }
</style>