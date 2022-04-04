<template>
  <div class="bgWrap3">
    <div class="bgOut"></div>
        <img src="../../assets/phonedesk.png" class="bgIn" /> 

    <el-tooltip class="item" effect="dark" content="爸爸一有空就在手机上看短视频，妈妈和他讲话常常得不到回应，两人总是吵架" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item2" effect="dark" content="手机“设置”里的数字健康功能可以设置手机停用时间" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item3" effect="dark" content="将爸爸手机的停用时间设置为22：30-23：30应该有用" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

        <p class="levelTipS6">在15s内救出父亲，速度越快，奖励越丰富哦！</p>

    <audio autoplay loop>
      <source src="../../assets/bgm2.mp3" type="audio/mp3" />
    </audio>

    <div class="cardBox">
        {{"倒计时："+times+"秒"}}
    </div>

     <div class="gameOver" v-show="successShow">
       <div class="overText">解救成功<br/>用时{{25-times}}秒</div>
       <el-button type="success" plain class="overBtn" @click="showReward">继续</el-button>
     </div>

      <div class="gameOver" v-show="rewardShow">
        <div class="rewardText">恭喜你！解锁{{a}}张背景图！{{b}}张贴纸！</div><br/><br/>
          <div style="text-align:center;">
            <img src="../../assets/choicePhone5.png" class="rewardPhone" v-if="rewardPhone1">
            <img src="../../assets/choicePhone6.png" class="rewardPhone" v-if="rewardPhone2">
            <img src="../../assets/stick7.png" class="rewardStick" v-if="rewardStick1">
            <img src="../../assets/stick8.png" class="rewardStick" v-if="rewardStick2">
            <img src="../../assets/stick9.png" class="rewardStick" v-if="rewardStick3">
          </div>
          <br/>
            <el-button type="success" plain class="overBtn" @click="s3jump7">继续</el-button>
      </div>

     <div class="gameOver" v-show="overShow">
        <p class="overText">解救失败</p>
        <el-button type="danger" plain class="overBtn" @click="reStart">重新开始</el-button>
     </div>

      <div>
        <img src="../../assets/settingicon.png" class="settingicon" @click="showSetting">
        <p class="settingtext">设置</p>
        <img src="../../assets/appstoreIcon.png" class="scheduleicon">
        <p class="appstoretext">应用商店</p>
        <img src="../../assets/videoIcon.png" class="gameicon">
        <p class="videotext">爱视频</p>
        <img src="../../assets/timeicon.png" class="timeicon">
        <p class="timetext">时钟</p>
      </div>
    
    <settingPage 
        v-show="setShow"
        @showDialog2="showDialog"
        @toDesk="toDesk"
        @showLimit="showLimit">
    </settingPage>

    <limitPage 
        v-if="limitShow"
        @banTimeRight="rightBan"
        @backSetting="backSetting">
    </limitPage>
    
    </div>
</template>

<script>
import settingPage from "../../components/settingPage"
import limitPage from "../../components/limitPage"

export default {
  name: 'levelThreeS7',

  data () {
    return {
        setShow:false,
        limitShow:false,
        successShow:false,
        times: 25,
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

  methods: {
    showSetting(){
      this.setShow=true
    },
    showDialog(data){
      this.dialogShow=data
    },
    toDesk(data){
      this.setShow=data
    },
    showLimit(data){
      this.limitShow=data
      this.setShow=false
    },
    backSetting(data){
      this.setShow=data
      this.limitShow=!data
    },
    rightBan(data){
      this.successShow=data
      this.limitShow=false
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
      if(25-this.times>20){
        this.a=0
        this.b=2
        this.rewardStick1=true
        this.rewardStick2=true
      }else{
        if(25-this.times>10){
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
    s3jump7 () {
      this.$router.push({ path: '/levelthree/s8' })
    },
  },
  components:{
    settingPage,
    limitPage
  }
}

</script>


<style>
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