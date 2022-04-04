<template>
<div class="bgWrap3">
 <div class="bgOut"></div>
    <video
          autoplay
          class="bgIn"
          style="z-index:1"
          @ended="stopVideo()"
        >
      <source src="../../assets/dumbbell.mp4" type="video/mp4" />
    </video>

        <el-button 
            type="info" 
            plain
            class="mainButton32"
            v-if="buttonShow"
            @click="s3jump4"
            >
            前往客厅
        </el-button>
</div>
</template>

<script>
export default {
name:"levelThreeS4",

data(){
    return{
        buttonShow:false,
    }
},

methods:{
    stopVideo(){
        this.buttonShow=true
    },
    s3jump4(){
      this.$router.push({ path: '/levelthree/s5' })
    }
},

components:{

}
}
</script>

<style>
.mainButton32{
  right: 400px;
  bottom: 150px;
  font-weight: 600;
  position: absolute;
  animation: fadeIn 4s;
  z-index: 10;
}
</style>