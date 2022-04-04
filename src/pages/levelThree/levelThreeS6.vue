<template>
  <div class="bgWrap3">
    <div class="bgOut"></div>
    <video
      autoplay
      class="bgIn"
      style="z-index:100"
      @ended="stopVideoagain()"
      v-show="eshow1"
    >
      <source src="../../assets/notification.mp4" type="video/mp4" />
    </video>
    <img
      src="../../assets/notify.png"
      class="bgIn"
      v-show="eshow2"
    />
    <img src="../../assets/inButton.png" class="inButton" v-if="eshow3" @click="s3jump6"/>

    <myDialog  
      v-show="eshow2" 
      :talkList="talkList" 
      @showButton="showinBtn">
    </myDialog>

  </div>
</template>

<script>
import myDialog from "../../components/myDialog"

export default {
  name: 'levelThreeS6',

  data () {
    return {
      eshow1:true,
      eshow2:false,
      talkList: [
        '什么看视频送红包、抽大奖，不就是商家为了打广告赚流量的噱头嘛……',
        '往往浪费大量时间和精力还得不偿失',
        '只是想吸引人浪费更多时间在看视频上而已'
      ],
      eshow3:false
    }
  },

  methods: {
    stopVideoagain () {
      this.eshow1 = false
      this.eshow2 = true
    },
    s3jump6(){
      this.$router.push({ path: '/levelthree/s7' })
    },
    showinBtn(data){
        this.eshow3=data
    },
    },
  components: {
    myDialog
  }
}
</script>


<style>
.inButton{
    width: 100px;
    height: 60px;
    position: absolute;
    right: 250px;
    bottom: 300px;
    cursor: pointer;
    animation: tada 1s;
}
</style>