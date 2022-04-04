<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
    <img src="../../assets/phonedesk.png" class="bgIn" /> 

    <el-tooltip class="item" effect="dark" content="手机“设置”里的数字健康功能可以限制应用程序的使用时间" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item2" effect="dark" content="把刘凯每天玩游戏的时间限制为30分钟应该有用" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <p class="levelTipS6">在25s内救出刘凯，速度越快，奖励越丰富哦！</p>

    <audio autoplay loop>
      <source src="../../assets/bgm2.mp3" type="audio/mp3" />
    </audio>

    <div class="cardBox">
        {{"倒计时："+times+"秒"}}
    </div>

     <div class="gameOver" v-show="successShow">
       <div class="overText">解救成功<br/>用时{{35-times}}秒</div>
       <el-button type="success" plain class="overBtn" @click="showReward">继续</el-button>
     </div>

      <div class="gameOver" v-show="rewardShow">
        <div class="rewardText">恭喜你！解锁{{a}}张背景图！{{b}}张贴纸！</div><br/><br/>
          <div style="text-align:center;">
            <img src="../../assets/choicePhone1.png" class="rewardPhone" v-if="rewardPhone1">
            <img src="../../assets/choicePhone2.png" class="rewardPhone" v-if="rewardPhone2">
            <img src="../../assets/stick1.png" class="rewardStick" v-if="rewardStick1">
            <img src="../../assets/stick2.png" class="rewardStick" v-if="rewardStick2">
            <img src="../../assets/stick3.png" class="rewardStick" v-if="rewardStick3">
          </div>
          <br/>
            <el-button type="success" plain class="overBtn" @click="sJump6">继续</el-button>
      </div>

     <div class="gameOver" v-show="overShow">
        <p class="overText">解救失败</p>
        <el-button type="danger" plain class="overBtn" @click="reStart">重新开始</el-button>
     </div>

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
      timeShow:false,
      scheduleShow:false,
      gameShow:false,
      limitShow:false,
      successShow:false,
      times: 35,
      overShow:false,
      rewardShow:false,
      a:1,
      b:1,
      rewardPhone1:false,
      rewardPhone2:false,
      rewardStick1:false,
      rewardStick2:false,
      rewardStick3:false,
    }
  },

  created() {
    this.getTime();   //只要该页面一渲染创建，就开始倒计时
  },

  methods:{
    showSetting(){
      this.setShow=true
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
    getTime() {
      this.timer = setInterval(()=>{
        this.times--
        if(this.times===0){
          clearInterval(this.timer)
          this.overShow=true
        }else{
          if(this.successShow==true){
             clearInterval(this.timer)
          }
        }
      },1000)
    },
    reStart(){
        window.location.reload()
    },
    showReward(){
      if(35-this.times>25){
        this.a=0
        this.b=2
        this.rewardStick1=true
        this.rewardStick2=true
      }else{
        if(35-this.times>15){
        this.a=1
        this.b=2
        this.rewardPhone1=true
        this.rewardStick1=true
        this.rewardStick2=true
        }else{
        this.a=2
        this.b=3
        this.rewardPhone1=true
        this.rewardPhone2=true
        this.rewardStick1=true
        this.rewardStick2=true
        this.rewardStick3=true
        }
      }
      this.rewardShow=true
      this.successShow=false
    },
    sJump6 () {
      this.$router.push({ path: '/levelone/s7' })
    },
  },

  components:{
    settingPage,
    limitPage
  }
}
</script>

<style>
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
.levelTipS6{
  width: 200px;
  height: 50px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.7;
  padding: 20px;
  left: 200px;
  top:50px;
  position: absolute;
  animation: wobble 2s;
  text-align: left;
  z-index: 10;
}
.cardBox{
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  right: 200px;
  top:50px;
  position: absolute;
  z-index: 10;
  padding: 10px;
  opacity: 0.7;
}
.rewardText{
  margin-top: 130px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
}
.rewardPhone{
  width: 100px;
  height: 50px;
  margin-top: 20px;
  left: 200px;
  top: 200px;
  margin-left: 20px;
}
.rewardStick{
  width: 80px;
  height: 80px;
  margin-left: 20px;
  margin-top: 20px;
}
</style>