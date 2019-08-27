<template>
    
<div class="box">
  <h2 class="titt">输入采购入库</h2>
    <side></side>
<el-form ref="form" :model="form" label-width="100px" class="right">
  <el-form-item label="提交时间">
  <span class="left"> {{dayjs().format('YYYY-MM-DD  HH:mm:ss')}} </span>
  </el-form-item>
   <el-form-item label="部门">
    <el-select v-model="form.region" placeholder="一级部门" class="use">
      <el-option label="一级部门1" value="shanghai"></el-option>
      <el-option label="一级部门2" value="beijing"></el-option>
        <el-option label="一级部门3" value="shanghai"></el-option>
      <el-option label="一级部门4" value="beijing"></el-option>
            </el-select>
<div class="sel">
       <el-select v-model="form.region" placeholder="二级部门" class="use">
      <el-option label="二级部门1" value="shanghai"></el-option>
      <el-option label="二级部门2" value="beijing"></el-option>
      <el-option label="二级部门3" value="shanghai"></el-option>
      <el-option label="二级部门4" value="beijing"></el-option>
    </el-select>
</div>
  </el-form-item>
  <el-form-item label="负责人">
    <el-select v-model="form.region" placeholder="请选择负责人" class="use">
      <el-option label="张三" value="shanghai"></el-option>
      <el-option label="李四" value="beijing"></el-option>
        <el-option label="王五" value="shanghai"></el-option>
      <el-option label="赵六" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="仓库">
    <el-select v-model="form.region" placeholder="请选择接收仓库" class="use">
      <el-option label="A仓库" value="shanghai"></el-option>
      <el-option label="B仓库" value="beijing"></el-option>
        <el-option label="C仓库" value="shanghai"></el-option>
      <el-option label="D仓库" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="采购入库号">
  <span class="left"> 20190826093400001 </span>
  </el-form-item>

  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
<div class="pri">
<el-button type="text" @click="centerDialogVisible = true">从采购申请导入</el-button>

<el-drawer
  direction="ttb"
  :visible.sync="centerDialogVisible"
  size="100%"
  center
  z-index=1000>
  <template>
    
<div class="box">
  <h2 class="titts">采购申请列表</h2>
<el-form ref="form" :model="form" label-width="100px" class="rights">
  <el-form-item label="申请日期">
   <el-col :span="6">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2"> - </el-col>
    <el-col :span="6">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
   <el-form-item label="采购申请号">
         <div class="sqh">
       <el-input v-model="input" placeholder="请输入采购申请号"></el-input>
     </div>
  </el-form-item>
   <el-form-item label="申请状态">
    <el-select v-model="form.region" placeholder="请选择" class="use">
      <el-option label="待审核" value="shanghai"></el-option>
      <el-option label="已审核" value="beijing"></el-option>
      <el-option label="采购中" value="shanghai"></el-option>
      <el-option label="已采购" value="beijing"></el-option>
      <el-option label="已完成" value="beijing"></el-option>
    </el-select>
    <div class="butt">
      <el-button type="success" icon="el-icon-search">搜索</el-button>
    </div>
  </el-form-item>
 <template>
  <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 83%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    
    <el-table-column
      label="采购申请号"
      prop="sqh"
      width="100">
    </el-table-column>
    <el-table-column
      label="供应商"
      prop="gys"
      width="100">
    </el-table-column>
    <el-table-column
      prop="pm"
      label="品目"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="jzrq"
      label="截止日期"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="je"
      label="金额"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="zt"
      label="状态"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="isend"
      label="是否结束"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
</template>
 <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>

  <el-form-item id="mag">
    <el-button type="primary" @click="centerDialogVisible = false">确认选择</el-button>
  </el-form-item>
</el-form>
</div>
</template>
</el-drawer>
</div>
 <template>
  <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 90%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    
    <el-table-column
      label="采购申请号"
      prop="sqh"
      width="100">
    </el-table-column>
    <el-table-column
      label="供应商"
      prop="gys"
      width="100">
    </el-table-column>
    <el-table-column
      prop="pm"
      label="品目"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="jzrq"
      label="截止日期"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="je"
      label="金额"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="zt"
      label="状态"
      width="94"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="isend"
      label="是否结束"
      width="100"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
</template>

  <el-form-item id="mag">
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>重新输入</el-button>
  </el-form-item>
</el-form>
</div>
</div>
</template>>
<script>
import side from "../../../components/side/index"
import dayjs from 'dayjs'
  export default {
      components: {
            side,
            
      },
    data() {
      return {
        centerDialogVisible: false,
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
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'已完成',
          isend:'已结束'
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
margin-top: 50px;
margin-left: 100px;
}
.left{
  float: left;
}
.pri{
  margin-bottom: 10px;
  float: left;
}
.sqh{
  width: 200px;
}
.butt{
  float: right;
  margin-right: 200px;
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
  left: 0;
  margin-top: 20px;
}
</style>
<style>
.el-dialog__wrapper,.el-dialog--center .el-dialog__body,.el-dialog__header{
  background-color: #eee;
}
.el-col-2{
  padding-left: 30px;
}
.el-drawer__header{
  margin-bottom: 0;
}
.el-dialog__wrapper{
  width: 90%;
  left: 5%;
  height: 90%;
  top: 5%;
}
.rights{
margin-left: 15%;
}
.titts{
  margin-left: 15%;
}
</style>