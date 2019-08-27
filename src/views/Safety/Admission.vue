<template>
    <div class="bg">
        <safetyside></safetyside>
        <div id="ifr">
            <iframe src="http://123.206.216.171:8888/safe/checkin.html" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:120px;left: 130px;"></iframe>
        </div>
        
    </div>
</template>
<script>
import safetyside from "../../components/safetyside/index"
export default {
    components:{
        safetyside,
    },
    data() {
        return {
            url1:'',
        }
    },
        mounted(){
      /**
      * iframe-宽高自适应显示   
      */
      function changeMobsfIframe(){
        const mobsf = document.getElementById('mobsf');
        const deviceWidth = document.body.clientWidth;
        const deviceHeight = document.body.clientHeight;
        mobsf.style.width = (Number(deviceWidth)-120) + 'px'; //数字是页面布局宽度差值
        mobsf.style.height = (Number(deviceHeight)+1000) + 'px'; //数字是页面布局高度差
      }
 
      changeMobsfIframe()
 
      window.onresize = function(){
        changeMobsfIframe()
      }
    },     
}
</script>
<style lang="less" scoped>
    .bg{
        font-size: 50px;
    }
</style>