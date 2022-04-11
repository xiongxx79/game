<template>
<div class="bgWrap2">
    <div class="bgOut"></div>
        <img src="../../assets/levelTwoAttackBg.png" class="bgIn">

    <audio autoplay>
      <source src="../../assets/phones3.mp3" type="audio/mp3" />
    </audio>

    <audio id="overMusic">
      <source src="../../assets/overMusic.mp3" type="audio/mp3" />
    </audio>

    <audio autoplay loop id="bgMusic23">
      <source src="../../assets/attackBgMusic.mp3" type="audio/mp3" />
    </audio>

    <audio id="attackSuccessMusic">
      <source src="../../assets/attackSuccessMusic.mp3" type="audio/mp3" />
    </audio>

    <audio id="wrongAudio">
      <source src="../../assets/wrongAudio.mp3" type="audio/mp3" />
    </audio>

    <audio id="correctAudio">
      <source src="../../assets/correctAudio.mp3" type="audio/mp3" />
    </audio>

    <el-tooltip class="item" effect="dark" content="“交友圈”大量的消息提醒让梦梦很烦躁" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <img src="../../assets/phoneGuard1.png" class="guard1" v-show="badFaceShow"/>
    <img src="../../assets/phoneGuard2.png" class="guard2" v-show="hurtFaceShow"/>

    <img src="../../assets/phoneGuard1.png" class="guard11" v-show="badFaceShow11"/>

    <p class="guardTalk" v-show="badFaceShow">
      怎么又是你！听说你已经打伤了我的一个朋友，我不会放过你的！
    </p>

    <myDialog @showButton="showBtn" :talkList="talkList" v-if="dialogShow">
    </myDialog>

    <p class="levelTip2" v-if="blood1Show">
      快捡起地上的木枝攻击暗黑守卫！攻击失败守卫会恢复生命值
    </p>

    <div>
      <img
        src="../../assets/crabStick1.png"
        class="crabStick1"
        @click="() => handleToClick(0)"
        v-if="crabStick1Show"
      />
      <img
        src="../../assets/crabStick2.png"
        class="crabStick2"
        @click="() => handleToClick(1)"
        v-if="crabStick2Show"
      />
      <img
        src="../../assets/crabStick3.png"
        class="crabStick3"
        @click="() => handleToClick(2)"
        v-if="crabStick3Show"
      />
      <img
        src="../../assets/crabStick4.png"
        class="crabStick4"
        @click="() => handleToClick(3)"
        v-if="crabStick4Show"
      />
      <img
        src="../../assets/crabStick5.png"
        class="crabStick5"
        @click="() => handleToClick(4)"
        v-if="crabStick5Show"
      />
    </div>

    <div class="boloodAll">
      <img src="../../assets/blood1.png" class="bloods2" v-if="blood1Show" />
      <img src="../../assets/blood2.png" class="bloods2" v-if="blood2Show" />
      <img src="../../assets/blood3.png" class="bloods2" v-if="blood3Show" />
    </div>

    <choiceQuestion
      v-show="quesShow"
      :question="question"
      @sendAnswer="getAnswer"
      class="bgIn"
    >
    </choiceQuestion>

    <div class="gameOver" v-show="overShow">
      <p class="overText">游戏结束</p>
      <el-button type="danger" plain class="overBtn" @click="reStart"
        >重新开始</el-button
      >
    </div>

    <div class="gameOver" v-show="tipsShow">
      <div style="margin-left: 140px">
        <div class="tipsOut">
          <p class="tipsTitle">提示1：</p>
          <br /><br />
          <p style="font-size:16px;margin:20px;font-weight:600;">
          💡梦梦最近每天玩“交友圈”玩的头晕脑胀，快开学了寒假作业还没写完，又因为没时间玩不能和朋友一起出去野餐，心情很差，轻而易举就被手机控制了
          </p>
          <br />
        </div>
        <div class="tipsOut">
          <p class="tipsTitle">提示2：</p>
          <br /><br />
          <p style="font-size:16px;margin:20px;font-weight:600;">
          💡在在手机设置的“通知”功能里关闭“交友圈”的消息通知应该有用
          </p>
          <br/>
          <el-button
            type="success"
            plain
            style="margin-left: 15%; font-weight: 600"
            @click="showDoorLock"
          >
            去仓库大门看看
          </el-button>
        </div>
      </div>
    </div>
       <img src="../../assets/tipPhone.png" class="tipPhone2" v-show="tipPhoneShow" @click="tipsShow=true,tipPhoneShow=false"/>
       <img src="../../assets/doorLock.png" class="doorLock2" v-if="doorLockShow" @click="s2Jump3"/>
  </div>
</template>

<script>
import myDialog from "../../components/myDialog"
import choiceQuestion from "../../components/choiceQuestion"

export default {
  name: 'levelOneS3',
  data () {
    return {
      doorLockShow:false,
      tipPhoneShow:false,
      badFaceShow11:false,
      quesShow: false,
      bloodShow: false,
      hurtFaceShow: false,
      badFaceShow: true,
      dialogShow: true,
      crabStick1Show: false,
      crabStick2Show: false,
      crabStick3Show: false,
      crabStick4Show: false,
      crabStick5Show: false,
      blood1Show: false,
      blood2Show: false,
      blood3Show: false,
      overShow: false,
      bloodOut: false,
      tipsShow: false,
      b: 3,
      question: {},
      talkList: [
        '难道我还打不过你吗？',
        '我是不会被手机控制的！'
      ],
      questionList: [
        {
          title: '当我们反思自己的数字设备使用情况的时候，我们应该反思（）',
          answerList: [
            {
              value: 1,
              label: 'A.是谁使用的，在哪里使用的，为什么要使用',
            },
            {
              value: 2,
              label: 'B.我使用了什么，我是什么时候使用的，我使用了多久，我感觉怎么样',
            },
          ],
          solution: 2
        },
        {
          title: '健康的数字设备使用计划可能会随着个人兴趣和日程安排的变化而改变。',
          answerList: [
            {
              value: 1,
              label: 'A.正确',
            },
            {
              value: 2,
              label: 'B.错误',
            },
          ],
          solution: 1
        },
        {
          title: '数字技术已经对梦梦产生了负面影响，所以她应该（）',
          answerList: [
            {
              value: 1,
              label: 'A.再也不使用数字设备了',
            },
            {
              value: 2,
              label: 'B.反思这些负面影响，学着合理使用数字设备',
            },
          ],
          solution: 2
        },
        {
          title: '使用数字设备的时间越久，梦梦就越能感受到快乐。',
          answerList: [
            {
              value: 1,
              label: 'A.正确',
            },
            {
              value: 2,
              label: 'B.错误',
            },
          ],
          solution: 2
        },
        {
          title: '梦梦因为在手机上刷社交媒体浪费了大量时间，错过了与朋友一起野餐的机会和同学一起走路上学的机会，她感到很孤单，她应该（）',
          answerList: [
            {
              value: 1,
              label: 'A.在课堂上与她的朋友聊天',
            },
            {
              value: 2,
              label: 'B.限制自己看社交媒体的时间，保证有时间与朋友一起活动',
            },
          ],
          solution: 2
        },
      ],
    }
  },
  methods: {
    showBtn () {
      this.bloodOut = true
      this.blood1Show = true
      this.blood2Show = false
      this.blood3Show = false
      this.dialogShow = false
      this.crabStick1Show = true
      this.crabStick2Show = true
      this.crabStick3Show = true
      this.crabStick4Show = true
      this.crabStick5Show = true
    },

    handleToClick (num) {
      if (num == 0) {
        this.crabStick1Show = false
      } else {
        if (num == 1) {
          this.crabStick2Show = false
        } else {
          if (num == 2) {
            this.crabStick3Show = false
          } else {
            if (num == 3) {
              this.crabStick4Show = false
            } else {
              this.crabStick5Show = false
            }
          }
        }
      }
      this.quesShow = true
      this.question = this.questionList[num]
    },
    getAnswer (data) {
      const value = this.question.solution
      if (data === value) {
        this.$message({
          message: '回答正确！',
          type: 'success'
        })
        document.getElementById('correctAudio').play()
        this.badFaceShow = false
        this.hurtFaceShow = true
        const that = this
        setTimeout(() => {
          that.badFaceShow = true
          that.hurtFaceShow = false
        }, 2000)
        this.quesShow = false
        this.question = {}
        if (this.b == 3) {
          this.blood1Show = false
          this.blood2Show = true
          this.blood3Show = false
          this.b -= 1
        } else {
          if (this.b == 2) {
          this.blood1Show = false
          this.blood2Show = false
          this.blood3Show = true
            this.b -= 1
          } else {
          this.blood1Show = false
          this.blood2Show = false
          this.blood3Show = false
            this.b -= 1
          }
        }
        if (this.blood1Show == false && this.blood2Show == false && this.blood3Show == false) {
           setTimeout(() => {
           document.getElementById('attackSuccessMusic').play()
           document.getElementById('bgMusic23').pause()
           this.badFaceShow = false
           this.badFaceShow11=true
        }, 2000)
            setTimeout(() => {
           this.badFaceShow11=false
           this.tipPhoneShow=true
        }, 3000)
        }
      } else {
        this.$message({
          message: '回答错误！',
          type: 'error'
        })
        document.getElementById('wrongtAudio').play()
        this.quesShow = false
        this.question = {}
        if (this.b != 3) {
          if (this.b == 2) {
             this.b += 1
          this.blood1Show = true
          this.blood2Show = false
          this.blood3Show = false
          } else {
            if (this.b == 1) {
              this.b += 1
          this.blood1Show = false
          this.blood2Show = true
          this.blood3Show = false
            } else {
              this.b += 1
          this.blood1Show = false
          this.blood2Show = false
          this.blood3Show = true
            }
          }
        }
        if (this.crabStick1Show == false && this.crabStick2Show == false && this.crabStick3Show == false
          && this.crabStick4Show == false && this.crabStick5Show == false) {
              if(this.blood1Show==true || this.blood2Show==true || this.blood3Show==true){
              document.getElementById('bgMusic23').pause()
              document.getElementById('overMusic').play() 
              this.overShow = true
              }
          
        }
      }
    },
    showDoorLock(){
       this.tipsShow=false
       this.doorLockShow=true
     },
    reStart () {
      window.location.reload()
    },
    s2Jump3 () {
      this.$router.push({ path: '/leveltwo/s4' })
    },
  },
  components: {
    choiceQuestion,
    myDialog
  }
}
</script>

<style>
.bgWrap {
  width: 100%;
  height: 100%;
  background: #39619b;
}
.bgOut {
  width: 78%;
  height: 100%;
  background: #ffffff;
  left: 11%;
  position: absolute;
}
.bgIn {
  left: 12%;
  top: 2%;
  width: 76%;
  height: 96%;
  position: absolute;
}
.crabStick1 {
  width: 60px;
  height: 50px;
  left: 250px;
  bottom: 60px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.crabStick2 {
  width: 60px;
  height: 50px;
  left: 290px;
  bottom: 60px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.crabStick3 {
  width: 60px;
  height: 50px;
  left: 320px;
  bottom: 20px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.crabStick4 {
  width: 60px;
  height: 50px;
  left: 310px;
  bottom: 50px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.crabStick5 {
  width: 60px;
  height: 50px;
  left: 270px;
  bottom: 30px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.gameOver {
  left: 12%;
  top: 2%;
  width: 76%;
  height: 96%;
  background: #000000;
  opacity: 0.9;
  position: absolute;
  z-index: 10;
}
.overText {
  margin-top: 130px;
  font-size: 72px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
}
.overBtn {
  margin-left: 45%;
  margin-top: 30px;
  cursor: pointer;
  font-weight: 600;
}
.guard1 {
  width: 230px;
  height: 300px;
  left: 440px;
  top: 160px;
  position: absolute;
  z-index: 10;
}
.guard2 {
  width: 230px;
  height: 300px;
  left: 440px;
  top: 160px;
  position: absolute;
  animation: jello 1s;
  z-index: 10;
}
.guardTalk {
  width: 300px;
  height: 50px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 20px;
  right: 320px;
  top: 260px;
  animation: fadeIn 2s;
  position: absolute;
}
.levelTip2 {
  font-size: 18px;
  color: #000000;
  right: 400px;
  top: 30px;
  position: absolute;
  animation: fadeIn 2s;
  text-align: center;
  animation: wobble 1s;
}
.bloods2 {
  width: 260px;
  height: 50px;
  right: 600px;
  top: 110px;
  position: absolute;
}
.doorLock2{
  width: 80px;
  height: 60px;
  position: absolute;
  right: 435px;
  bottom: 90px;
  animation: fadeIn 5s;
  cursor: pointer;
}
.guard11 {
  width: 230px;
  height: 300px;
  left: 440px;
  top: 160px;
  position: absolute;
  z-index: 100;
  animation: zoomOut 1s;
}
.tipPhone2 {
  right: 750px;
  bottom: 90px;
  width: 100px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  animation: flash 3s infinite;
}
</style>