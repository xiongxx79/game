<template>
   <div class="twoWrap3">
    <audio autoplay loop>
      <source src="../../assets/bgm2.mp3" type="audio/mp3" />
    </audio>
      <div>
        <img src="../../assets/settingicon.png" class="settingicon" @click="showSetting2">
        <p class="settingtext">设置</p>
        <img src="../../assets/appstoreIcon.png" class="scheduleicon">
        <p class="appstoretext">应用商店</p>
        <img src="../../assets/videoIcon.png" class="gameicon">
        <p class="videotext">爱视频</p>
        <img src="../../assets/timeicon.png" class="timeicon">
        <p class="timetext">时钟</p>
      </div>
    
    <settingPage 
      v-show="setShow2"
      @showDialog2="showDialog"
      @toDesk="toDesk2"
      @showLimit="showLimit2">
    </settingPage>

    <myDialog 
      v-if="dialogShow"
      :talkList="talkList"
      @showButton="goAway">
    </myDialog>

    <limitPage 
    v-if="limitShow2"
    @banTimeRight="rightBan"
    @backSetting="backSetting2">
    </limitPage>

    <img 
    src="../../assets/tip3.png" 
    class="tip1" 
    v-if="tipShow3">

    <img 
    src="../../assets/tipBtn.png" 
    class="tipBtn" 
    v-if="tipShow3" 
    @click.once="tipShow3=false">

    <img 
    src="../../assets/tip4.png" 
    class="tip1" 
    v-if="tipShow4">

    <img 
    src="../../assets/tipBtn.png" 
    class="tipBtn" 
    v-if="tipShow4" 
    @click.once="tipShow4=false">

    <img 
    src="../../assets/successBg2.png" 
    class="successBg1" 
    v-if="successShow2">
    <img src="../../assets/alertCard.png" 
    class="alertCard" 
    v-if="successShow2" 
    @click.once="card3=true">

    <img src="../../assets/card3.png" 
    class="cards" 
    v-if="card3" >
    <img src="../../assets/cardBtn.png" 
    class="cardBtn" 
    v-if="card3" 
    @click="card3=false,card4=true">
    <img src="../../assets/card4.png" 
    class="cards" 
    v-if="card4" >
    <img 
    src="../../assets/nextLevelBtn.png" 
    class="cardBtn" 
    v-if="card4" 
    @click="jump6">
    
    </div>
</template>

<script>

import settingPage from "../../components/settingPage"
import myDialog from "../../components/myDialog"
import limitPage from "../../components/limitPage"

export default {
  name: 'levelTwoS3',

  data () {
    return {
        setShow2:false,
        dialogShow:false,
        limitShow2:false,
        tipShow3:true,
        talkList: [
        '之前我新学了一首歌想唱给老爸听，他忙着刷短视频，根本就没留心听我唱',
        '最近他看短视频时间长了，经常听说他晚上睡不着',
        '让我把睡前一小时设置为他的手机停用时间把~'
      ],
        tipShow4:false,
        card3:false,
        card4:false,
        successShow2:false
    }
  },

  methods: {
    showSetting2(){
      this.setShow2=true
    },
    showDialog(data){
      this.dialogShow=data
    },
    goAway(data){
      this.dialogShow=!data
      this.tipShow4=data
    },
    toDesk2(data){
      this.setShow2=data
    },
    showLimit2(data){
      this.limitShow2=data
    },
    rightBan(){
      this.successShow2=true
    },
    jump6(){
      this.$router.push({ path: '/levelthree/s1' })
    },
    backSetting2(data){
      this.setShow2=data
      this.limitShow2=!data
    }
  },
  components:{
    settingPage,
    myDialog,
    limitPage
  }
}

</script>


<style>
.twoWrap3 {
  width: 100%;
  height: 100%;
  background: black url("../../assets/phonedesk.png") top/80% 100% no-repeat;
  background-size: contains;
}
.appstoretext{
  left: 668px;
  bottom: 280px;
  font-size:6px;
  position: absolute;
  color: aliceblue;
}
.videotext{
  left: 672px;
  bottom: 180px;
  font-size:6px;
  position: absolute;
  color: aliceblue;
}
</style>