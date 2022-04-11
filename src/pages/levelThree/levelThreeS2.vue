<template>
<div class="bgWrap3">
 <div class="bgOut"></div>

    <audio id="hero7">
      <source src="../../assets/hero7.mp3" type="audio/mp3" />
    </audio>

    <video
          autoplay
          v-show="videoShow"
          class="bgIn"
          style="z-index:100"
          @ended="stopVideo()"
        >
      <source src="../../assets/homeTv.mp4" type="video/mp4" />
    </video>

    <img
      src="../../assets/daddy.png"
      class="bgIn"
      v-show="imgShow"
    />

     <myDialog  
        v-show="imgShow" 
        :talkList="talkList"
        @showButton="showBtn">
    </myDialog>

        <el-button 
            type="info" 
            plain
            class="mainButton31"
            v-if="buttonShow"
            @click="s3jump2"
            >
            追去看看
        </el-button>

    <img src="../../assets/phoneSir.png" class="phoneSir32" v-show="phoneSir32Show"/>

  </div>
</template>

<script>

import myDialog from "../../components/myDialog"

export default {
  name: 'levelThreeS2',

  data () {
    return {
      phoneSir32Show:false,
      videoShow: true,
      imgShow: false,
      buttonShow:false,
      talkList: [
        '爸爸！爸爸！……',
        '怎么连大人有时也抵挡不住手机的诱惑啊',
        '我要怎么救爸爸出来呢？不然一会儿老妈又要生气了',
        '咦！什么东西跑到厨房里去了！'
      ]
    }
  },

  methods: {
    stopVideo () {
      document.getElementById('hero7').play()
      this.videoShow = false
      this.imgShow = true
    },
    showBtn(){
        this.phoneSir32Show=true
        setTimeout(() => {
           this.phoneSir32Show=false
        }, 2000)
        this.buttonShow=true
    },
    s3jump2(){
      this.$router.push({ path: '/levelthree/s3' })
    }
    },
  components: {
    myDialog
  }
}
</script>

<style>
.mainButton31{
  left: 350px;
  bottom: 150px;
  font-weight: 600;
  position: absolute;
  animation: fadeIn 4s;
  z-index: 10;
}
.phoneSir32{
  width: 150px;
  height: 200px;
  left: 350px;
  top: 200px;
  position: absolute;
  z-index: 100;
  animation: backOutLeft 2s;
}
</style>