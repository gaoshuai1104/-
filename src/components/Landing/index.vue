<template>
  <div class="home">
    <div class="left">
      <img src="../../../static/bg.jpg" class />
    </div>
    <div class="right">
      <h2>中国浦东干部管理学院</h2>
      <span>BIM.FM运营管理平台</span>
      <div class="user">
        <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
      </div>
      <el-input placeholder="请输入密码" v-model="passwored" show-password></el-input>
      <div class="checked">
        <el-checkbox v-model="checked">记住我</el-checkbox>
      </div>
      <button class="but" @click="lond">登陆</button>
      <span>@Arcplus Surbana Jurong Digital Ltd</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      passwored: "",
      checked: true
    };
  },
  // name: 'home',
  // components: {
  // },
  methods: {
    lond() {
      this.$router.push({ name: "Apply" });
    }
  }
};
</script>
<style lang="less" scoped>
.left {
  img {
    width: 60%;
    height: 100%;
    position: absolute;
    left: 0;
  }
}
.right {
  position: absolute;
  width: 30%;
  right: 0;
  padding-right: 5%;
  padding-top: 15%;
  .user{
    margin: 20px 0 20px 0;
  }
  .checked{
    position: absolute;
    left: 0;
    margin-top: 20px;
  }
  .but{
    margin-top: 60px;
    width: 100%;
    height: 40px;
    background-color:green;
    border-radius: 8px;
    border: none;
    margin-bottom: 30px;
  }
}
</style>
