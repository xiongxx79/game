<template>
  <div class="bgWrap3">
    <div class="bgOut"></div>
    <img src="../../assets/daddy.png" class="bgIn" />

    <audio autoplay>
      <source src="../../assets/phones4.mp3" type="audio/mp3" />
    </audio>

    <audio id="overMusic">
      <source src="../../assets/overMusic.mp3" type="audio/mp3" />
    </audio>

    <audio autoplay loop id="bgMusic35">
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

    <el-tooltip class="item" effect="dark" content="爸爸一有空就在手机上看短视频，妈妈和他讲话常常得不到回应，两人总是吵架" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item2" effect="dark" content="手机“设置”里的数字健康功能可以设置手机停用时间" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>


    <img src="../../assets/phoneSir.png" class="phoneSirAttack" v-show="badFaceShow"/>
    <img src="../../assets/phoneSir2.png" class="phoneSir2" v-show="hurtFaceShow"/>

    <img src="../../assets/phoneSir.png" class="phoneSir11" v-show="badFaceShow11"/>

    <p class="phoneSirAttackTalk" v-show="badFaceShow">
       我可是最高级别的暗黑手机，就凭你也想抓住我？
    </p>

    <myDialog @showButton="showBtn" :talkList="talkList" v-if="dialogShow">
    </myDialog>

    <p class="levelTip2" v-if="blood1Show">
      快用哑铃攻击暗黑将领！攻击失败手机会恢复生命值
    </p>

    <div>
      <img
        src="../../assets/dumbbell.png"
        class="dumbbell1"
        @click="() => handleToClick(0)"
        v-if="dumb1Show"
      />
      <img
        src="../../assets/dumbbell.png"
        class="dumbbell2"
        @click="() => handleToClick(1)"
        v-if="dumb2Show"
      />
      <img
        src="../../assets/dumbbell.png"
        class="dumbbell3"
        @click="() => handleToClick(2)"
        v-if="dumb3Show"
      />
      <img
        src="../../assets/dumbbell.png"
        class="dumbbell4"
        @click="() => handleToClick(3)"
        v-if="dumb4Show"
      />
      <img
        src="../../assets/dumbbell.png"
        class="dumbbell5"
        @click="() => handleToClick(4)"
        v-if="dumb5Show"
      />
    </div>

    <div class="boloodAllS3">
      <img src="../../assets/blood1.png" class="bloods3" v-if="blood1Show" />
      <img src="../../assets/blood2.png" class="bloods3" v-if="blood2Show" />
      <img src="../../assets/blood3.png" class="bloods3" v-if="blood3Show" />
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
    <div style="margin-left:140px">
      <div class="tipsOut">
          <p class="tipsTitle">提示1：</p><br/><br/>
          <p style="font-size:16px;margin:20px;font-weight:600;">💡爸爸总是在睡前的一个小时22：30-23：30一直看视频，晚上常常失眠，但坏习惯养成很难改掉</p><br/>
      </div>
      <div class="tipsOut">
          <p class="tipsTitle">提示2：</p>
          <br/><br/>
          <img src="../../assets/listenCard.png" 
          width="140px" 
          height="80px" 
          style="margin-left:40px">
          <p style="font-size:16px;margin:20px;font-weight:600;">聆听卡：使用此卡片后周围的人都会认真地听你说话</p>
          <el-button 
          type="success" 
          plain
          style="margin-left:34%;font-weight:600"
          @click="tipsShow=false,lightShow=true"
          >
          使用
          </el-button>
     </div>
    </div>
  </div>
    <img src="../../assets/tipPhone.png" class="tipPhone3" v-show="tipPhoneShow" @click="tipsShow=true,tipPhoneShow=false"/>
    <img src="../../assets/ylight.png" class="ylight3" v-if="lightShow" @click="s3jump5"/>
  </div>
</template>

<script>
import myDialog from "../../components/myDialog"
import choiceQuestion from "../../components/choiceQuestion"

export default {
  name: 'levelThreeS5',
  data () {
    return {
      badFaceShow11:false,
      tipPhoneShow:false,
      lightShow:false,
      quesShow: false,
      bloodShow: false,
      hurtFaceShow: false,
      badFaceShow: true,
      dialogShow: true,
      dumb1Show: false,
      dumb2Show: false,
      dumb3Show: false,
      dumb4Show: false,
      dumb5Show: false,
      blood1Show: false,
      blood2Show: false,
      blood3Show: false,
      overShow: false,
      bloodOut: false,
      tipsShow: false,
      b: 3,
      question: {},
      talkList: [
        '你竟然还敢留在这里',
        '快放他出来！'
      ],
      questionList: [
        {
          title: '网络成瘾的危害中的人格异化是指（）',
          answerList: [
            {
              value: 1,
              label: 'A.过度沉迷网络中的虚拟角色，迷失真实自我',
            },
            {
              value: 2,
              label: 'B.对真实生活中的人和事缺少兴趣，情感淡漠',
            },
          ],
          solution: 2
        },
        {
          title: '网络成瘾严重者会出现心血管疾病甚至猝死，及抑郁、焦虑、精神分裂症等典型精神障碍。',
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
          title: '当我们在现实生活中遇到挫折时，我们应该（）',
          answerList: [
            {
              value: 1,
              label: 'A.在数字空间里缓解情绪，逃避问题',
            },
            {
              value: 2,
              label: 'B.和家人、朋友、老师交流，寻求帮助',
            },
          ],
          solution: 2
        },
        {
          title: '当我们意识到自己可能对数字技术上瘾时，我们应该（）',
          answerList: [
            {
              value: 1,
              label: 'A.严肃对待，自我调节，寻求家人朋友或老师的帮助',
            },
            {
              value: 2,
              label: 'B.顺其自然，用娱乐的一时快感来麻痹自己',
            },
          ],
          solution: 1
        },
        {
          title: '当我们想要使用数字设备时，我们应该考虑（）',
          answerList: [
            {
              value: 1,
              label: 'A.我要使用什么？应该什么时候使用？应该使用多长时间？',
            },
            {
              value: 2,
              label: 'B.我要使用什么？应该在哪里使用？如何尽可能久地使用？',
            },
          ],
          solution: 1
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
      this.dumb1Show = true
      this.dumb2Show = true
      this.dumb3Show = true
      this.dumb4Show = true
      this.dumb5Show = true
    },
    reStart () {
      window.location.reload()
    },
    s3jump5 () {
      this.$router.push({ path: '/levelthree/s6' })
    },
    handleToClick (num) {
      if (num == 0) {
        this.dumb1Show = false
      } else {
        if (num == 1) {
          this.dumb2Show = false
        } else {
          if (num == 2) {
            this.dumb3Show = false
          } else {
            if (num == 3) {
              this.dumb4Show = false
            } else {
              this.dumb5Show = false
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
           document.getElementById('bgMusic35').pause()
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
        document.getElementById('wrongAudio').play()
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
                 document.getElementById('bgMusic35').pause()
                 document.getElementById('overMusic').play()
                 this.overShow = true
              }
      }
    }
  }
  },
  components: {
    choiceQuestion,
    myDialog
  }
}
</script>

<style>
.phoneSirAttack{
  width: 200px;
  height: 250px;
  left: 360px;
  top: 200px;
  position: absolute;
  z-index: 10;
}
.phoneSirAttackTalk{
  width: 200px;
  height: 50px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 20px;
  left: 180px;
  top: 180px;
  animation: fadeIn 2s;
  position: absolute;
}
.dumbbell1 {
  width: 100px;
  height: 100px;
  left: 150px;
  bottom: 50px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.dumbbell2 {
  width: 100px;
  height: 100px;
  left: 210px;
  bottom: 30px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.dumbbell3 {
  width: 100px;
  height: 100px;
  left: 190px;
  bottom: 20px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.dumbbell4 {
  width: 100px;
  height: 100px;
  left: 180px;
  bottom: 80px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.dumbbell5 {
  width: 100px;
  height: 100px;
  left: 180px;
  bottom: 50px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.bloods3{
  width: 260px;
  height: 50px;
  left: 300px;
  top: 110px;
  position: absolute;
}
.phoneSir11 {
  width: 200px;
  height: 250px;
  left: 360px;
  top: 200px;
  position: absolute;
  z-index: 100;
  animation: zoomOut 1s;
}
.tipPhone3 {
  right: 800px;
  bottom: 100px;
  width: 100px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  animation: flash 3s infinite;
}
.phoneSir2{
  width: 200px;
  height: 250px;
  left: 360px;
  top: 200px;
  position: absolute;
  animation: jello 1s;
  z-index: 10;
}
.ylight3{
  right: 520px;
  bottom: 160px;
  position: absolute;
  cursor: pointer;
  width:  100px;
  height: 100px;
  animation: rotateIn 2s infinite;
  z-index: 10;
}
</style>