<template>
    <div class="twoWrap2">
    <video
      width="100%"
      height="615px"
      autoplay
      style="margin-top:-50px"
      @ended="stopVideoagain()"
      v-show="eshow1"
    >
      <source src="../../assets/notification.mp4" type="video/mp4" />
    </video>
    <img
      src="../../assets/notify.png"
      width="80%"
      height="100%"
      v-show="eshow2"
      style="margin-left: 10%"
    />
    <img src="../../assets/inButton.png" class="inButton" v-if="eshow3" @click="jump5"/>

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
  name: 'levelTwoS2',

  data () {
    return {
      eshow1:true,
      eshow2:false,
      talkList: [
        '什么看视频送红包、抽大奖，不就是商家为了赚取流量或打广告的噱头嘛……',
        '往往浪费大量时间和精力还得不偿失',
        '爸爸一定是顺手点击这些弹窗通知，跳转到短视频应用，一刷就停不下来了',
        '不行，我得关掉这些一直弹出的通知'
      ],
      eshow3:false
    }
  },

  methods: {
    stopVideoagain () {
      this.eshow1 = false
      this.eshow2 = true
    },
    jump5(){
      this.$router.push({ path: '/leveltwo/s3' })
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
.twoWrap2 {
  width: 100%;
  height: 100%;
  background: black;
  background-size: contains;
}
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