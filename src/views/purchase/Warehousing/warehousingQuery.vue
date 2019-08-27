<template>
    
<div class="box">
  <h2 class="titt">采购入库列表</h2>
    <side></side>
<el-form ref="form" :model="form" label-width="100px" class="right">
  <el-form-item label="申请日期">
   <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
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
    <el-button type="success" icon="el-icon-search">搜索</el-button>
  </el-form-item>
  <div>
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


  <div class="button">
      <el-button type="success">批准入库</el-button>
      <el-button type="warning">不批准入库</el-button>
      <el-button type="danger">删除所选项</el-button>
    </div>
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
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'待审核',
          isend:'已结束'
        },{
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'已审核',
          isend:'已结束'
        }, {
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'采购中',
          isend:'已结束'
        }, {
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'已完成',
          isend:'已结束'
        }, {
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'待审核',
          isend:'已结束'
        }, {
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'待审核',
          isend:'已结束'
        }, {
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'已采购',
          isend:'结束'
        }, {
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'待审核',
          isend:'已结束'
        }, {
          sqh: 'CG2019082001',
          gys: '京东',
          pm: '笔记本电脑',
          jzrq:'2019-09-10',
          num:'3',
          je:'10000',
          zt:'已采购',
          isend:'结束'
        }, ],
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
.sqh{
  width: 200px;
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
.block{
  float: right;
  margin: 30px 0;
}
.button{
  float: left;
  margin-top: 30px;
}
.inp{
  height: 30px;
  outline:none;
  border-radius: 4px;
  float: left;
}
#mag{
  margin-top: 40px;
}
</style>