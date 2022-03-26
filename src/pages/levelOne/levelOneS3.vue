<template>
   <div class="bgWrap">
    <div class="bgOut"></div>
      <img src="../../assets/attackOneBg.png" class="bgIn">

     <img src="../../assets/phoneSoldier.png" class="soldier">
     <p class="soldierTalk">没想到你竟然能找到这里，不过有我的守卫，你是救不出朋友的，死了这条心吧！</p>

      <myDialog 
        @showButton="showBtn" 
        :talkList="talkList"
        v-if="dialogShow">
      </myDialog>

     <p class="levelTip2" v-if="blood1Show">快捡起地上的石子攻击暗黑小兵！攻击失败小兵会恢复生命值</p>

     <div>
     <img src="../../assets/stone.png" class="stone1" @click="() => handleToClick(0)" v-if="stone1Show">
     <img src="../../assets/stone.png" class="stone2" @click="() => handleToClick(1)" v-if="stone2Show">
     <img src="../../assets/stone.png" class="stone3" @click="() => handleToClick(2)" v-if="stone3Show">
     <img src="../../assets/stone.png" class="stone4" @click="() => handleToClick(3)" v-if="stone4Show">
     <img src="../../assets/stone.png" class="stone5" @click="() => handleToClick(4)" v-if="stone5Show">
     </div>

     <div  class="boloodAll">
        <img src="../../assets/blood1.png" class="blood"  v-if="blood1Show">
        <img src="../../assets/blood2.png" class="blood"  v-if="blood2Show">
        <img src="../../assets/blood3.png" class="blood"  v-if="blood3Show">
        <img src="../../assets/bloodOut.png" class="blood" v-if="bloodOut">
     </div>

     <img src="../../assets/hurtFace.png" class="face" v-show="hurtFaceShow">
     <img src="../../assets/badFace.png" class="face" v-show="badFaceShow">

    <choiceQuestion 
            v-show="quesShow"
            :question="question"
            @sendAnswer="getAnswer"
            class="bgIn">
     </choiceQuestion>

    <div class="gameOver" v-show="overShow">
        <p class="overText">游戏结束</p>
        <el-button type="danger" plain class="overBtn" @click="reStart">重新开始</el-button>
    </div>

    <div class="gameOver" v-show="tipsShow">
      <div style="margin-left:140px">
        <div class="tipsOut">
          <p class="tipsTitle">提示1：</p><br/><br/>
          <p style="font-size:18px">√ 刘凯已经很长时间离不开自己的手机了，手机不在身边就觉得心慌，熬夜玩手机导致他睡眠严重不足，总感到很疲倦，轻而易举就被手机控制了。</p><br/>   
        </div>
        <div class="tipsOut">
          <p class="tipsTitle">提示2：</p><br/><br/>
          <p style="font-size:18px">√ 把刘凯每天玩游戏的时间限制为30分钟应该有用。</p><br/><br/><br/>
          <el-button 
          type="success" 
          plain 
          style="margin-left:15%;font-weight:600"
          @click="sJump3"
          >
          去仓库大门看看
          </el-button>
        </div>
      </div>
    </div>

</div>
</template>

<script>
import myDialog from "../../components/myDialog"
import choiceQuestion from "../../components/choiceQuestion"

export default {
  name: 'levelOneS3',
  data(){
      return{
         quesShow:false,
         bloodShow:false,
         hurtFaceShow:false,
         badFaceShow:true,
         dialogShow:true,
         stone1Show:false,
         stone2Show:false,
         stone3Show:false,
         stone4Show:false,
         stone5Show:false,
         blood1Show:false,
         blood2Show:false,
         blood3Show:false,
         overShow:false,
         bloodOut:false,
         tipsShow:true,
         b:3,
         question: {},
         talkList:[
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
          title: '刘凯经常在骑自行车的时候看手机，有一天他边骑车边发微信，差点撞到两个同学。他自己也摔倒在地，膝盖都磨破了。他应该（）。',
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
    showBtn(){
      this.bloodOut=true
      this.blood1Show=true
      this.blood2Show=true
      this.blood3Show=true
      this.dialogShow=false
      this.stone1Show=true
      this.stone2Show=true
      this.stone3Show=true
      this.stone4Show=true
      this.stone5Show=true
    },
    reStart(){
        window.location.reload()
    },
    sJump3(){
      this.$router.push({ path: '/levelone/s4' })
    },
    handleToClick (num) {
      if(num==0){
        this.stone1Show=false
      }else{
        if(num==1){
          this.stone2Show=false
        }else{
          if(num==2){
            this.stone3Show=false
          }else{
            if(num==3){
              this.stone4Show=false
            }else{
              this.stone5Show=false
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
        this.quesShow = false
        this.question = {}
        if(this.b==3){
          this.blood1Show=false
          this.b-=1
        }else{
          if(this.b==2){
            this.blood2Show=false
            this.b-=1
          }else{
            this.blood3Show=false
            this.b-=1
          }
        }
        if(this.blood3Show==false){
          alert('chenggong')
        }
      } else {
        this.$message({
          message: '回答错误！',
          type: 'error'
        })
        this.quesShow = false
        this.question = {}
       if(this.b!=3){
         if(this.b==2){
         this.b+=1
         this.blood1Show=true
         }else{
           if(this.b==1){
             this.b+=1
             this.blood2Show=true
           }else{
             this.b+=1
             this.blood3Show=true
           }
       }
      }
        if(this.stone1Show==false && this.stone2Show==false && this.stone3Show==false 
           && this.stone4Show==false && this.stone5Show==false &&this.blood3Show==true){
             this.overShow=true
      }
    }
    }
  },
  components:{
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
.stone5{
  width: 60px;
  height: 50px;
  left: 340px;
  bottom: 50px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.gameOver{
  left: 12%;
  top:2%;
  width:76%;
  height:96%;
  background: #000000;
  opacity: 0.9;
  position: absolute;
  z-index: 10;
}
.overText{
  margin-top: 130px;
  font-size: 72px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
}
.overBtn{
  margin-left: 45%;
  margin-top: 30px;
  cursor: pointer;
  font-weight: 600;
}
.tipsOut{
  background:#ffffff;
  width: 220px;
  height: 300px;
  color: #67C23A;
  margin-top: 130px;
  margin-left: 50px;
  z-index: 100;
  display:inline-table;
  padding: 20px;
}
.tipsTitle{
  background: #67C23A;
  width: 70px;
  height: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  z-index: 100;
  display: inline-table;
  padding: 12px;
}
.soldier{
  width: 250px;
  height: 300px;
  right: 450px;
  top:150px;
  position: absolute;
  animation: fadeIn 2s;
  z-index: 10;
}
.face{
    width: 120px;
    height: 12s0px;
    position: absolute;
    right: 515px;
    top:225px;
    z-index: 10;
    transform: rotate(-5deg);
    animation: fadeIn 2s;
}
.soldierTalk{
  width: 300px;
  height: 70px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 20px;
  right: 550px;
  top:90px;
  animation: fadeIn 2s;
  position: absolute;
}
.levelTip2{
  font-size: 18px;
  color: #000000;
  right: 400px;
  top:30px;
  position: absolute;
  animation: fadeIn 2s;
  text-align: center;
  animation: wobble 1s;
}
.blood{
border:none;
width: 200px;
height: 50px;
right: 310px;
top:255px;
position: absolute;
}
</style>