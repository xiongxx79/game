<template>
    <div class="bgWrap">
    <div class="bgOut"></div>
    <video
          autoplay
          v-show="videoShow"
          class="bgIn"
          style="z-index:100"
          @ended="stopVideo()"
        >
          <source src="../../assets/intoVideo.mp4" type="video/mp4" />
    </video>

    <div>
        <img src="../../assets/intoBg.png" class="bgIn" v-show="intoBtnShow" style="z-index:100">
            
          <el-button
          type="info"
          plain
          class="intoButton"
          v-if="intoBtnShow"
          @click="jumpMap"
          >
          跟去看看
          </el-button>

          <img src="../../assets/flower.gif" class="flower" v-show="intoBtnShow">
          
    </div>
  </div>
</template>

<script>
export default {
 name: 'startPageDu',

 data(){
  return{
      videoShow:true,
      intoBtnShow:false
  }
},
methods:{
     stopVideo(){
         this.videoShow=false
         this.intoBtnShow=true
     },
     jumpMap(){
         this.$router.push({ path: '/map' })
     }
}
}
</script>

<style>
.intoButton{
  right: 600px;
  bottom: 400px;
  font-weight: 600;
  position: absolute;
  animation: fadeIn 4s;
  z-index:100;
}
.flower{
    width: 200px;
    height: 200px;
    left: 200px;
    bottom: 5px;
    position: absolute;
    z-index: 100;
}
</style>