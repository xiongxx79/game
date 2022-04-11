<template>
  <div class="bgWrap2">
    <div class="bgOut"></div>
     <img src="../../assets/mengmeng2.png" class="bgIn">

    <audio autoplay>
      <source src="../../assets/mengmeng.mp3" type="audio/mp3" />
    </audio>

     <audio id="successPass">
      <source src="../../assets/successPass.mp3" type="audio/mp3" />
    </audio>

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
      setTimeout(this.valChange,5000);
},
methods:{
    valChange() {
      this.passShow=true
      document.getElementById('successPass').play()
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