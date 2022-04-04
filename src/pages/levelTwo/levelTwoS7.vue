<template>
  <div class="bgWrap2">
    <div class="bgOut"></div>
     <img src="../../assets/mengmeng2.png" class="bgIn">

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
name:"levelTwoS7",

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

</style>