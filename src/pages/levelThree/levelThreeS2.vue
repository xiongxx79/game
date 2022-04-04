<template>
<div class="bgWrap3">
 <div class="bgOut"></div>
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

  </div>
</template>

<script>

import myDialog from "../../components/myDialog"

export default {
  name: 'levelThreeS2',

  data () {
    return {
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
      this.videoShow = false
      this.imgShow = true
    },
    showBtn(){
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
</style>