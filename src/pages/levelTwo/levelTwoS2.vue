<template>
<div class="bgWrap2">
    <div class="bgOut"></div>
        <img src="../../assets/levelTwoBg.png" class="bgIn">
        <img src="../../assets/butterfly1.gif" class="butterfly1">

    <audio id="overMusic">
      <source src="../../assets/overMusic.mp3" type="audio/mp3" />
    </audio>

    <audio autoplay loop id="bgMusic22">
      <source src="../../assets/bgm1.mp3" type="audio/mp3" />
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

    <p class="levelTip">捡起木板搭一座木桥过河</p>
      <div>
        <img src="../../assets/lifeOutLine.png" class="life">
        <img src="../../assets/lifeHeart.png" class="life" v-show="life1">
        <img src="../../assets/lifeOutLine.png" class="life2">
        <img src="../../assets/lifeHeart.png" class="life2" v-show="life2">
      </div>
    <div>
      <img
        src="../../assets/woodBoard1.png"
        class="woodBoard1"
        @click="() => handleToClick(0)"
        v-if="woodBoard1Show"
      />
      <img
        src="../../assets/woodBoard2.png"
        @click="() => handleToClick(1)"
        class="woodBoard2"
        v-if="woodBoard2Show"
      />
      <img
        src="../../assets/woodBoard3.png"
        @click="() => handleToClick(2)"
        class="woodBoard3"
        v-if="woodBoard3Show"
      />
      <img
        src="../../assets/woodBoard4.png"
        @click="() => handleToClick(3)"
        class="woodBoard4"
        v-if="woodBoard4Show"
      />
      <img
        src="../../assets/woodBoard5.png"
        @click="() => handleToClick(4)"
        class="woodBoard5"
        v-if="woodBoard5Show"
      />
    </div>

    <choiceQuestion
      v-show="quesShow"
      :question="question"
      @sendAnswer="getAnswer"
    ></choiceQuestion>

  <div class="gameOver" v-show="overShow">
    <p class="overText">游戏结束</p>
    <el-button type="danger" plain class="overBtn" @click="reStart">重新开始</el-button>
  </div>

  <div class="gameOver" v-show="tipsShow">
    <div style="margin-left:140px">
      <div class="tipsOut">
          <p class="tipsTitle">提示1：</p><br/><br/>
          <p style="font-size:16px;margin:20px;font-weight:600;">💡梦梦最近迷上了“交友圈”这个社交应用，
            总是习惯性地反复检查手机有没有新消息或动态提醒，乱七八糟的提醒让她感到很烦躁</p><br/>
      </div>
      <div class="tipsOut">
          <p class="tipsTitle">提示2：</p>
          <br/><br/>
          <img src="../../assets/rope.png" 
          width="200px" 
          height="100px" 
          style="margin-left:15px">
          <br/>
          <p style="font-size:16px;margin:20px;font-weight:600;">一串结实的绳子，可以用来固定木桥</p>
          <el-button 
          type="success" 
          plain
          style="margin-left:34%;font-weight:600"
          @click="woodBridgeShow=true,tipsShow=false"
          >
          使用
          </el-button>
     </div>
    </div>
  </div>
  
      <img
        src="../../assets/woodBridge.png"
        class="woodBridge"
        v-if="woodBridgeShow"
      />
      <el-button 
      type="info" 
      plain
      class="goRiverBtn"
      v-if="woodBridgeShow"
      @click="s2Jump2"
      >
      过河
      </el-button>
</div>
</template>

<script>
import choiceQuestion from "../../components/choiceQuestion"

export default {
name:"levelTwoS2",

data(){
    return{
    a:2,
      life1:true,
      life2:true,
      overShow:false,
      quesShow: false,
      woodBoard1Show:true,
      woodBoard4Show:true,
      woodBoard3Show:true,
      woodBoard5Show:true,
      woodBoard2Show:true,
      woodBridgeShow:false,
      tipsShow:false,
      question: {},
      questionList: [
        {
          title: '梦梦喜欢在社交软件上与朋友保持联系。最近，她在手机上收到很多消息通知，每次有通知时她都会打开社交APP并查看，现在她因为反复地查看手机而烦燥、焦虑。你会建议她（）',
          answerList: [
            {
              value: 1,
              label: 'A.向她的朋友们抱怨',
            },
            {
              value: 2,
              label: 'B.更改手机设置，这样她就不会收到分散注意力的通知',
            },
            {
              value: 3,
              label: 'C.回复朋友，告诉他们他们很烦人',
            },
            {
              value: 4,
              label: 'D.删除她的帐户，再也不使用社交媒体',
            },
          ],
          solution: 2
        },
        {
          title: '梦梦正在跟着网上的视频学习弹吉他，但她大多数时间都在看视频而不是练习，每当他拿起吉他时就有点失望。你会建议她（）',
          answerList: [
            {
              value: 1,
              label: 'A.这些视频对她没有帮助，不要再看了',
            },
            {
              value: 2,
              label: 'B.花更多的时间练习，这样她就不会感到失望了',
            },
            {
              value: 3,
              label: 'C.去学习别的乐器',
            },
            {
              value: 4,
              label: 'D.看更多的教学视频',
            },
          ],
          solution: 2
        },
        {
          title: '以下哪条符合数字健康的要求？',
          answerList: [
            {
              value: 1,
              label: 'A.做到数字健康意味着使用数字设备的时间越少越好',
            },
            {
              value: 2,
              label: 'B.做到数字健康意味着每天使用数字设备一小时',
            },
            {
              value: 3,
              label: 'C.使用数字设备的计划会随着一个人兴趣和需要的变化而变化',
            },
            {
              value: 4,
              label: 'D.数字健康要求我们再也不使用数字设备',
            },
          ],
          solution: 3
        },
               {
          title: '网络成瘾的判断标准是平均每日连续使用网络时间达到或超过（）小时，且符合症状标准已达到或超过（）个月。',
          answerList: [
            {
              value: 1,
              label: 'A.8，3',
            },
            {
              value: 2,
              label: 'B.8，4',
            },
            {
              value: 3,
              label: 'C.6，3',
            },
            {
              value: 4,
              label: 'D.6，4',
            },
          ],
          solution: 3
        },
               {
          title: '以下属于手机成瘾的有（）',
          answerList: [
            {
              value: 1,
              label: 'A.移动社交媒体成瘾',
            },
            {
              value: 2,
              label: 'B.手机短视频成瘾',
            },
            {
              value: 3,
              label: 'C.手机单纯强迫行为',
            },
            {
              value: 4,
              label: 'D.以上都是',
            },
          ],
          solution: 4
        },
      ],
    }
  },
  methods: {
    handleToClick (num) {
      if(num==0){
        this.woodBoard1Show=false
      }else{
        if(num==1){
          this.woodBoard2Show=false
        }else{
          if(num==2){
            this.woodBoard3Show=false
          }else{
            if(num==3){
              this.woodBoard4Show=false
            }else{
              this.woodBoard5Show=false
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
        this.quesShow = false
        this.question = {}
        if(this.woodBoard1Show==false && this.woodBoard2Show==false && this.woodBoard3Show==false && this.woodBoard4Show==false && this.woodBoard5Show==false){
           document.getElementById('bgMusic22').pause()
           document.getElementById('attackSuccessMusic').play()
           this.tipsShow=true
        }
      } else {
        this.$message({
          message: '回答错误！',
          type: 'error'
        });
        document.getElementById('wrongAudio').play()
       if(this.a==2){
         this.a-=1;
         this.life2=false
       }else{
           this.a-=1;
           this.life1=false
           document.getElementById('bgMusic22').pause()
           document.getElementById('overMusic').play()
           this.overShow=true
       }
      }
    },
    reStart(){
        window.location.reload()
    },
    s2Jump2(){
      this.$router.push({ path: '/leveltwo/s3' })
    }
  },
  components: {
    choiceQuestion
  }
}
</script>

<style>
.woodBoard1 {
  width: 100px;
  height: 60px;
  left: 340px;
  bottom: 150px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.woodBoard2 {
  width: 120px;
  height: 80px;
  right: 200px;
  bottom: 170px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.woodBoard3 {
  width: 110px;
  height: 80px;
  left: 400px;
  bottom: 260px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.woodBoard4 {
  width: 120px;
  height: 50px;
  left: 200px;
  bottom: 200px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.woodBoard5 {
  width: 130px;
  height: 60px;
  right: 480px;
  bottom: 120px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.woodBridge{
  width: 200px;
  height: 200px;
  right: 550px;
  bottom: 200px;
  z-index: 1;
  position: absolute;
  animation: flip 1s;
}
.goRiverBtn{
  right: 620px;
  bottom: 180px;
  font-weight: 600;
  position: absolute;
  animation: fadeIn 2s;
}
.butterfly1{
  position: absolute;
  width: 120px;
  height: 120px;
  left: 250px;
  top: 100px;
  transform: rotate(20deg);
}
</style>