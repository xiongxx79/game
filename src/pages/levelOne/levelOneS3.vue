<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
    <img src="../../assets/attackOneBg.png" class="bgIn" />
    <img src="../../assets/butterfly2.gif" class="butterfly2" />

    <img src="../../assets/phoneSoldier1.png" class="soldier1" v-show="badFaceShow"/>
    <img src="../../assets/phoneSoldier2.png" class="soldier2" v-show="hurtFaceShow"/>

    <img src="../../assets/phoneSoldier1.png" class="soldier11" v-show="badFaceShow11"/>

    <p class="soldierTalk" v-show="badFaceShow">
      没想到你竟然能找到这里，不过有我的守卫，你是救不出朋友的，死了这条心吧！
    </p>

    <myDialog @showButton="showBtn" :talkList="talkList" v-if="dialogShow">
    </myDialog>

    <p class="levelTip2" v-if="blood1Show">
      快捡起地上的石子攻击暗黑小兵！攻击失败小兵会恢复生命值
    </p>

    <el-tooltip class="item" effect="dark" content="手机“设置”里的数字健康功能可以限制应用程序的使用时间" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <div>
      <img
        src="../../assets/stone.png"
        class="stone1"
        @click="() => handleToClick(0)"
        v-if="stone1Show"
      />
      <img
        src="../../assets/stone.png"
        class="stone2"
        @click="() => handleToClick(1)"
        v-if="stone2Show"
      />
      <img
        src="../../assets/stone.png"
        class="stone3"
        @click="() => handleToClick(2)"
        v-if="stone3Show"
      />
      <img
        src="../../assets/stone.png"
        class="stone4"
        @click="() => handleToClick(3)"
        v-if="stone4Show"
      />
      <img
        src="../../assets/stone.png"
        class="stone5"
        @click="() => handleToClick(4)"
        v-if="stone5Show"
      />
    </div>

    <div class="boloodAll">
      <img src="../../assets/blood1.png" class="bloods1" v-if="blood1Show" />
      <img src="../../assets/blood2.png" class="bloods1" v-if="blood2Show" />
      <img src="../../assets/blood3.png" class="bloods1" v-if="blood3Show" />
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

    <img src="../../assets/tipPhone.png" class="tipPhone" v-show="tipPhoneShow" @click="tipsShow=true,tipPhoneShow=false"/>

    <div class="gameOver" v-show="tipsShow">
      <div style="margin-left: 140px">
        <div class="tipsOut">
          <p class="tipsTitle">提示1：</p>
          <br /><br />
          <p style="font-size:16px;margin:20px;font-weight:600;">
          💡刘凯已经很长时间离不开自己的手机了，手机不在身边就觉得心慌，熬夜玩手机导致他睡眠严重不足，总感到很疲倦，轻而易举就被手机控制了
          </p>
          <br />
        </div>
        <div class="tipsOut">
          <p class="tipsTitle">提示2：</p>
          <br /><br />
          <p style="font-size:16px;margin:20px;font-weight:600;">
          💡把刘凯每天玩游戏的时间限制为30分钟应该有用
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

        <img src="../../assets/doorLock.png" class="doorLock" v-if="doorLockShow" @click="sJump3"/>
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
      stone1Show: false,
      stone2Show: false,
      stone3Show: false,
      stone4Show: false,
      stone5Show: false,
      blood1Show: false,
      blood2Show: false,
      blood3Show: false,
      overShow: false,
      bloodOut: false,
      tipsShow: false,
      b: 3,
      question: {},
      talkList: [
        '可恶！刘凯就被关在那个仓库里吗？',
        '我一定会救出朋友的！'
      ],
      questionList: [
        {
          title: '刘凯和朋友们一起连续观看了五个小时的视频，他累了，想回家，但他的朋友们希望他留下来继续看。他应该（）。',
          answerList: [
            {
              value: 1,
              label: 'A. 停下回家',
            },
            {
              value: 2,
              label: 'B. 再多看一会儿，这能有什么危害',
            },
          ],
          solution: 1
        },
        {
          title: '刘凯最近在手机上下载了一个很好玩的游戏，他很想把游戏全部通关，所以他不放过任何一点玩游戏的时间。你会建议他（）。',
          answerList: [
            {
              value: 1,
              label: 'A. 删除游戏，回到现实的生活',
            },
            {
              value: 2,
              label: 'B. 先努力把游戏全部通关再说',
            },
          ],
          solution: 1
        },
        {
          title: '刘凯经常在骑自行车的时候看手机，有一天他边骑车边发微信，差点撞到两个同学。他自己也摔倒在地，膝盖都磨破了。他应该（）',
          answerList: [
            {
              value: 1,
              label: 'A. 和同学道歉，然后骑车离开',
            },
            {
              value: 2,
              label: 'B. 和同学道歉，从此骑车时决不看手机',
            },
          ],
          solution: 2
        },
        {
          title: '刘凯在过去的三个多月里平均每天玩游戏3小时，看视频2小时，在社交应用上聊天2小时，他对网络上瘾了吗？',
          answerList: [
            {
              value: 1,
              label: 'A. 是的，他有网瘾',
            },
            {
              value: 2,
              label: 'B. 不，他没有',
            },
          ],
          solution: 1
        },
        {
          title: '只要刘凯想戒掉网瘾，他就可以立即戒掉。',
          answerList: [
            {
              value: 1,
              label: 'A. 正确',
            },
            {
              value: 2,
              label: 'B. 错误',
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
      this.stone1Show = true
      this.stone2Show = true
      this.stone3Show = true
      this.stone4Show = true
      this.stone5Show = true
    },
    handleToClick (num) {
      if (num == 0) {
        this.stone1Show = false
      } else {
        if (num == 1) {
          this.stone2Show = false
        } else {
          if (num == 2) {
            this.stone3Show = false
          } else {
            if (num == 3) {
              this.stone4Show = false
            } else {
              this.stone5Show = false
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
        if (this.stone1Show == false && this.stone2Show == false && this.stone3Show == false
          && this.stone4Show == false && this.stone5Show == false) {
              if(this.blood1Show==true || this.blood2Show==true || this.blood3Show==true){
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
    sJump3 () {
      this.$router.push({ path: '/levelone/s4' })
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
.stone1 {
  width: 60px;
  height: 50px;
  left: 300px;
  bottom: 60px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.stone2 {
  width: 60px;
  height: 50px;
  left: 330px;
  bottom: 65px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.stone3 {
  width: 60px;
  height: 50px;
  left: 320px;
  bottom: 50px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.stone4 {
  width: 60px;
  height: 50px;
  left: 360px;
  bottom: 65px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.stone5 {
  width: 60px;
  height: 50px;
  left: 340px;
  bottom: 50px;
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
.soldier1 {
  width: 250px;
  height: 300px;
  right: 450px;
  top: 150px;
  position: absolute;
  z-index: 10;
}
.soldier2 {
  width: 250px;
  height: 300px;
  right: 450px;
  top: 150px;
  position: absolute;
  animation: jello 1s;
  z-index: 10;
}
.soldierTalk {
  width: 300px;
  height: 70px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 20px;
  right: 190px;
  top: 140px;
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
.bloods1{
  border: none;
  width: 200px;
  height: 50px;
  right: 500px;
  top: 90px;
  position: absolute;
}
.doorLock{
  width: 80px;
  height: 60px;
  position: absolute;
  right: 210px;
  bottom: 220px;
  animation: fadeIn 5s;
  cursor: pointer;
}
.soldier11 {
  width: 250px;
  height: 300px;
  right: 450px;
  top: 150px;
  position: absolute;
  z-index: 100;
  animation: zoomOut 1s;
}
.tipPhone {
  right: 500px;
  bottom: 150px;
  width: 100px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  animation: flash 3s infinite;
}
.butterfly2{
  position: absolute;
  width: 80px;
  height: 80px;
  left: 210px;
  bottom: 220px;
  transform: rotate(-45deg);
}
.item {
      margin: 4px;
      position: absolute;
      left: 149px;
      top:150px
    }

.item2 {
      margin: 4px;
      position: absolute;
      left: 143px;
      top:200px
    }
.item3 {
      margin: 4px;
      position: absolute;
      left: 143px;
      top:250px
    }
</style>