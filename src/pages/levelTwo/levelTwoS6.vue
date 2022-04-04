<template>
  <div class="bgWrap2">
    <div class="bgOut"></div>
    <img src="../../assets/phonedesk.png" class="bgIn" /> 

    <el-tooltip class="item" effect="dark" content="“交友圈”大量的消息提醒让梦梦很烦躁" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item2" effect="dark" content="梦梦因为沉迷社交媒体错过了与朋友的野餐，没能完成寒假作业" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item3" effect="dark" content="在手机设置的“通知”功能里关闭“交友圈”的消息通知应该有用" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <p class="levelTipS6">在20s内救出梦梦，速度越快，奖励越丰富哦！</p>

    <audio autoplay loop>
      <source src="../../assets/bgm2.mp3" type="audio/mp3" />
    </audio>

    <div class="cardBox">
        {{"倒计时："+times+"秒"}}
    </div>

     <div class="gameOver" v-show="successShow">
       <div class="overText">解救成功<br/>用时{{30-times}}秒</div>
       <el-button type="success" plain class="overBtn" @click="showReward">继续</el-button>
     </div>

      <div class="gameOver" v-show="rewardShow">
        <div class="rewardText">恭喜你！解锁{{a}}张背景图！{{b}}张贴纸！</div><br/><br/>
          <div style="text-align:center;">
            <img src="../../assets/choicePhone3.png" class="rewardPhone" v-if="rewardPhone1">
            <img src="../../assets/choicePhone4.png" class="rewardPhone" v-if="rewardPhone2">
            <img src="../../assets/stick4.png" class="rewardStick" v-if="rewardStick1">
            <img src="../../assets/stick5.png" class="rewardStick" v-if="rewardStick2">
            <img src="../../assets/stick6.png" class="rewardStick" v-if="rewardStick3">
          </div>
          <br/>
            <el-button type="success" plain class="overBtn" @click="s2Jump6">继续</el-button>
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
        class="scheduleicon">
        <p class="scheduletext">日程</p>

        <img 
        src="../../assets/friendsIcon.png" 
        class="gameicon" >
        <p class="gametext">交友圈</p>

        <img 
        src="../../assets/timeicon.png" 
        class="timeicon" >
        <p class="timetext">时钟</p>
    </div>

    <settingPage 
      v-show="setShow" 
      @showTip="showTip" 
      @toDesk="toDesk"
      @showLimit="showLimit"
      @banNoteSuccess="banNote">
    </settingPage>

    <limitPage 
      v-show="limitShow" 
      @backSetting="backSetting">
     </limitPage>
  </div>
</template>

<script>
import settingPage from "../../components/settingPage"
import limitPage from "../../components/limitPage"

export default {
  name: 'levelTwoS6',

  data(){
    return{
      setShow:false,
      limitShow:false,
      successShow:false,
      times: 30,
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
    showLimit(data){
      this.limitShow=data
      this.setShow=false
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
      if(30-this.times>20){
        this.a=0
        this.b=2
        this.rewardStick1=true
        this.rewardStick2=true
      }else{
        if(30-this.times>10){
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
    banNote(data){
      this.successShow=data
      this.limitShow=false
      this.setShow=false
    },
    s2Jump6() {
      this.$router.push({ path: '/leveltwo/s7' })
    },
  },

  components:{
    settingPage,
    limitPage
  }
}
</script>

<style>

</style>