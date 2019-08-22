<template>
    
<div class="box">
    <side></side>
<el-form ref="form" :model="form" label-width="80px" class="right">
  <el-form-item label="商品名称">
    <el-input v-model="form.name" size="80px"></el-input>
  </el-form-item>
    <el-form-item label="申请人">
    <el-input class="inp" v-model="form.user" placeholder="申请人"></el-input>
  </el-form-item>
  <el-form-item label="供应商">
    <el-select v-model="form.region" placeholder="请选择供应商">
      <el-option label="A供应商" value="shanghai"></el-option>
      <el-option label="B供应商" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="交付日期">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="物流跟踪">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="商品性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="消耗品" name="type"></el-checkbox>
      <el-checkbox label="固定物资" name="type"></el-checkbox>
      <el-checkbox label="永久资产" name="type"></el-checkbox>
      <el-checkbox label="流动资产" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="采购性质">
    <el-radio-group v-model="form.resource">
      <el-radio label="自购"></el-radio>
      <el-radio label="采购"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即申请</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>>
<script>
import side from "../../components/side/index"
  export default {
      components: {
            side
      },
    data() {
      return {
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
        }
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
      }
    }
  }
</script>
<style lang="less" scoped>
.box{
height: 100%;
}
.right{
    margin-left: 25%;
    position: absolute;
    top: 100px;
}
// .inp{
//   width: 100px;
// }
</style>