<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
     <img src="../../assets/liuKai2.png" class="bgIn">

        <img src="../../assets/successBg.png" class="successBg" v-show="passShow">

        <el-button 
           type="success" 
           plain 
           class="backMapBtn"
           v-show="passShow" 
           @click="jumpMap">
           返回地图
        </el-button>
</div>
</template>

<script>

export default {
name:"levelOneS7",

data(){
    return{
        passShow:false,
    }
},
created(){
      setTimeout(this.valChange,3000);
},
methods:{
    valChange() {
      this.passShow=true
    },

    beforeDestroy() {
       clearTimeout(this.timer);
  },
    jumpMap () {
      this.$router.push({ path: '/map' })
    },

},

components:{

}
}
</script>

<style>
.mainBtn5{
  right: 480px;
  bottom: 200px;
  font-weight: 600;
  position: absolute;
  animation: fadeIn 2s;
}
.ylight{
  right: 600px;
  bottom: 160px;
  position: absolute;
  cursor: pointer;
  width:  100px;
  height: 100px;
  animation: rotateIn 2s infinite;
  z-index: 10;
}
.successBg{
    width: 600px;
    height: 350px;
    position: absolute;
    top: 80px;
    left: 350px;
    animation: rubberBand 1s;
}
.backMapBtn{
    position: absolute;
    bottom: 120px;
    left: 590px;
    animation: fadeIn 1s;
    font-weight: 600;
}
</style>