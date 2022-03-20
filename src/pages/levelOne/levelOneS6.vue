<template>
  <div class="oneWrap3">
    <audio autoplay loop>
      <source src="../../assets/bgm2.mp3" type="audio/mp3" />
    </audio>
    <img 
    src="../../assets/tip1.png" 
    class="tip1" 
    v-if="tipShow1">

    <img 
    src="../../assets/tipBtn.png" 
    class="tipBtn" 
    v-if="tipShow1" 
    @click.once="tipDis">

    <div>
        <img 
        src="../../assets/settingicon.png" 
        class="settingicon" 
        @click="showSetting">
        <p class="settingtext">设置</p>

        <img 
        src="../../assets/scheduleicon.png" 
        class="scheduleicon"
        @click="showSchedule">
        <p class="scheduletext">日程</p>

        <img 
        src="../../assets/gameicon.png" 
        class="gameicon" 
        @click="showGame">
        <p class="gametext">游戏</p>

        <img 
        src="../../assets/timeicon.png" 
        class="timeicon" 
        @click="showTime">
        <p class="timetext">时钟</p>
    </div>

    <settingPage 
      v-show="setShow" 
      @showTip="showTip" 
      @toDesk="toDesk"
      @showLimit="showLimit">
    </settingPage>

    <img 
    src="../../assets/tip2.png" 
    class="tip1" 
    v-if="tipShow2">
    <img 
    src="../../assets/tipBtn.png" 
    class="tipBtn" 
    v-if="tipShow2" 
    @click.once="tipDis">

    <img 
    src="../../assets/stopTime.png" 
    class="stopTime" 
    v-show="timeShow">

      <el-button 
        type="info" 
        icon="el-icon-close" 
        circle size="mini" 
        class="closeBtn2" 
        v-show="timeShow" 
        @click="timeClose">
      </el-button>

    <img 
    src="../../assets/schedule.png" 
    class="schedule" 
    v-show="scheduleShow">

      <el-button 
        type="primary" 
        icon="el-icon-close" 
        circle size="mini"
        class="closeBtn3"
        v-show="scheduleShow" 
        @click="scheduleClose">
      </el-button>

    <img 
    src="../../assets/gameRecord.png" 
    class="gameRecord" 
    v-show="gameShow">
    <img 
    src="../../assets/closeBtn.png" 
    class="closeBtn4" 
    v-show="gameShow" 
    @click="gameClose"/>

    <limitPage 
      v-show="limitShow" 
      @showSuccess="showSuccess"
      @backSetting="backSetting">
     </limitPage>

    <img 
    src="../../assets/successBg1.png" 
    class="successBg1" 
    v-if="successShow">
    <img src="../../assets/alertCard.png" 
    class="alertCard" 
    v-if="successShow" 
    @click.once="card1=true">

    <img src="../../assets/card1.png" 
    class="cards" 
    v-if="card1" >
    <img src="../../assets/cardBtn.png" 
    class="cardBtn" 
    v-if="card1" 
    @click="card1=false,card2=true">
    <img src="../../assets/card2.png" 
    class="cards" 
    v-if="card2" >
    <img 
    src="../../assets/nextLevelBtn.png" 
    class="cardBtn" 
    v-if="card2" 
 >

  </div>
</template>

<script>
import settingPage from "../../components/settingPage"
import limitPage from "../../components/limitPage"

export default {
  name: 'levelOneS6',

  data(){
    return{
      setShow:false,
      tipShow1:true,
      tipShow2:false,
      timeShow:false,
      scheduleShow:false,
      gameShow:false,
      limitShow:false,
      successShow:false,
      card1:false
    }
  },
  methods:{
    showSetting(){
      this.setShow=true
    },
    tipDis(){
      this.tipShow1=false
      this.tipShow2=false
    },
    showTip(data){
      this.tipShow2 = data
    },
    toDesk(){
      this.setShow=false
    },
    showTime(){
      this.timeShow=true
    },
    timeClose(){
      this.timeShow=false
    },
    showSchedule(){
      this.scheduleShow=true
    },
    scheduleClose(){
      this.scheduleShow=false
    },
    showGame(){
      this.gameShow=true
    },
    gameClose(){
      this.gameShow=false
    },
    showLimit(data){
      this.limitShow=data
      this.setShow=false
    },
    showSuccess(data){
      this.successShow=data
      this.limitShow=false
    },
    backSetting(data){
      this.setShow=data
      this.limitShow=!data
    },
  },
  components:{
    settingPage,
    limitPage
  }
}
</script>

<style>
.oneWrap3{
  width: 100%;
  height: 100%;
  background: #39619b url("../../assets/phonedesk.png") top/80% 100% no-repeat;
  background-size: contains;
}
.settingicon{
  width: 40px;
  height: 40px;
  left: 570px;
  bottom: 300px;
  position: absolute;
  cursor: pointer;
}
.settingtext{
  left: 578px;
  bottom: 280px;
  font-size:6px;
  position: absolute;
  color: aliceblue;
}
.settingicon:hover{
  width: 40px;
  height: 40px;
  left: 570px;
  bottom: 300px;
  position: absolute;
  cursor: pointer;
  filter: brightness(80%);
}
.scheduleicon{
  width: 40px;
  height: 40px;
  left: 670px;
  bottom: 300px;
  position: absolute;
  cursor: pointer;
}
.scheduletext{
  left: 678px;
  bottom: 280px;
  font-size:6px;
  position: absolute;
  color: aliceblue;
}
.scheduleicon:hover{
  width: 40px;
  height: 40px;
  left: 670px;
  bottom: 300px;
  position: absolute;
  cursor: pointer;
  filter: brightness(80%);
}
.timeicon{
  width: 40px;
  height: 40px;
  left: 570px;
  bottom: 200px;
  position: absolute;
  cursor: pointer;
}
.timetext{
  left: 578px;
  bottom: 180px;
  font-size:6px;
  position: absolute;
  color: aliceblue;
}
.timeicon:hover{
  width: 40px;
  height: 40px;
  left: 570px;
  bottom: 200px;
  position: absolute;
  cursor: pointer;
  filter: brightness(80%);
}
.gameicon{
  width: 40px;
  height: 40px;
  left: 670px;
  bottom: 200px;
  position: absolute;
  cursor: pointer;
}
.gametext{
  left: 678px;
  bottom: 180px;
  font-size:6px;
  position: absolute;
  color: aliceblue;
}
.gameicon:hover{
  width: 40px;
  height: 40px;
  left: 670px;
  bottom: 200px;
  position: absolute;
  cursor: pointer;
  filter: brightness(80%);
}
.tip1{
  width: 400px;
  height: 250px;
  left: 450px;
  bottom: 150px;
  position: absolute;
  z-index: 1000;
  animation:fadeIn 2s;
}
.tipBtn{
  width: 130px;
  height: 45px;
  left: 570px;
  bottom: 195px;
  position: absolute;
  z-index: 10000;
  cursor: pointer;
  animation:fadeIn 2s;
}
.stopTime{
  width:420px;
  height: 200px;
  left: 430px;
  top: 200px;
  position: absolute;
  animation: zoomIn 0.5s;
}
.closeBtn2{
  right: 450px;
  bottom: 335px;
  position:absolute;
  z-index: 1000;
  animation: fadeIn 2s;
}
.schedule{
  width:350px;
  height: 400px;
  left: 450px;
  top: 100px;
  position: absolute;
  animation: zoomIn 0.5s;
}
.closeBtn3{
  right: 502px;
  bottom: 415px;
  position:absolute;
  z-index: 1000;
  animation: fadeIn 2s;
}
.gameRecord{
  width:700px;
  height: 400px;
  left: 260px;
  top: 100px;
  position: absolute;
  animation: zoomIn 0.5s;
}
.closeBtn4{
  width: 25px;
  height: 25px;
  right: 415px;
  bottom: 395px;
  position:absolute;
  z-index: 1000;
  animation: fadeIn 2s;
  cursor: pointer;
}
.successBg1{
  width: 76%;
  height: 100%;
  left: 12%;
  position: absolute;
  animation:zoomIn 1s;
  z-index: 100;
}
.alertCard{
  width: 100px;
  height: 45px;
  left: 47%;
  bottom: 35px;
  position: absolute;
  cursor: pointer;
  animation: fadeIn 3s;
  z-index: 1000;
}
.cards{
  width: 280px;
  height: 390px;
  left: 480px;
  top: 80px;
  position: absolute;
  animation: flip 0.7s ;
  z-index: 10000;
}
.cardBtn{
  width: 75px;
  height: 30px;
  left: 590px;
  bottom: 180px;
  position: absolute;
  cursor: pointer;
  animation: fadeIn 3s;
  z-index: 10000;
}
</style>