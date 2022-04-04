<template>
<div class="bgWrap3">
 <div class="bgOut"></div>
    <img src="../../assets/kitchen.png" class="bgIn" v-if="kitchen1Show">
    <img src="../../assets/kitchen2.png" class="bgIn" v-if="kitchen2Show"  style="animation:fadeIn 1s;">
        <el-button 
            type="info" 
            plain
            class="mainButton31"
            @click="showMouse"
            v-if="kitchen1Show"
            >
            当然行！
        </el-button>

        <p class="levelTip">抓到黑化手机获得线索提示</p>

      <div>
        <img src="../../assets/lifeOutLine.png" class="life">
        <img src="../../assets/lifeHeart.png" class="life" v-show="life1">
        <img src="../../assets/lifeOutLine.png" class="life2">
        <img src="../../assets/lifeHeart.png" class="life2" v-show="life2">
      </div>

<p class="countMouse" v-show="mouseShow">已抓到手机{{b}}/5</p>
<div class="holes" v-show="mouseShow">
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(0)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(1)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(2)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(3)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(4)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(5)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(6)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(7)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
    <div class="hole">
      <img src="../../assets/phoneSir.png" class="mouse" @click="() => handleToClick(8)">
      <img src="../../assets/boom.png" class="boom" alt="">
      <img src="../../assets/hole.png" alt="">
    </div>
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
          <p style="font-size:16px;margin:20px;font-weight:600;">💡爸爸这段时间一有空就在手机上看短视频，妈妈和他讲话常常得不到回应，两人总是吵架</p>
          <p style="font-size:16px;margin:20px;font-weight:600;">💡手机“设置”里的数字健康功能可以设置手机停用时间</p><br/>     
      </div>
      <div class="tipsOut">
          <p class="tipsTitle">提示2：</p>
          <br/><br/>
          <img src="../../assets/homeKey.png" 
          width="130px" 
          height="70px" 
          style="margin-left:45px">
          <p style="font-size:16px;margin:20px;font-weight:600;">这不是我家大门的钥匙吗？那些手机是怎么拿到的？</p>
          <el-button 
          type="success" 
          plain 
          style="margin-left:34%;font-weight:600"
          @click="s3jump3"
          >
          使用
          </el-button>
     </div>
    </div>
  </div>
</div>
</template>

<script>
import choiceQuestion from "../../components/choiceQuestion"

export default {
name:"levelThreeS3",

data(){
    return{
        tipsShow:false,
        a:2,
        b:0,
        life1:true,
        life2:true,
        mouseShow:false,
        kitchen1Show:true,
        kitchen2Show:false,
        question: {},
        questionList: [
        {
          title: '爸爸最近沉迷于手机短视频，这可能会导致（）',
          answerList: [
            {
              value: 1,
              label: 'A.家庭矛盾',
            },
            {
              value: 2,
              label: 'B.缺乏对家人的关心，减少家庭活动时间',
            },
            {
              value: 3,
              label: 'C.缺少体育锻炼的时间',
            },
            {
              value: 4,
              label: 'D.以上所有',
            },
          ],
          solution: 4
        },
        {
          title: '以下哪一项最能正确描述数字健康的概念？',
          answerList: [
            {
              value: 1,
              label: 'A.不使用任何数字设备',
            },
            {
              value: 2,
              label: 'B.做作业时被数字设备分散注意力',
            },
            {
              value: 3,
              label: 'C.只用数字设备玩自己最喜欢的游戏',
            },
            {
              value: 4,
              label: 'D.合理使用数字设备，使线上线下生活保持平衡',
            },
          ],
          solution: 4
        },
        {
          title: '爸爸最近感觉自己的身体状况不如以前了，他也想做体育锻炼。但是他一有空总是忙于看短视频。你应该劝爸爸怎么做？',
          answerList: [
            {
              value: 1,
              label: 'A.等到以后工作不那么忙再去锻炼',
            },
            {
              value: 2,
              label: 'B.一边看短视频一边做体育锻炼',
            },
            {
              value: 3,
              label: 'C.计划固定的时间放下手机进行锻炼，身体最重要',
            },
            {
              value: 4,
              label: 'D.既然没有时间就不要去锻炼了',
            },
          ],
          solution: 3
        },
               {
          title: '爸爸最近睡前总是看短视频来放松，但他经常忘记时间，直到很晚才入睡。因为休息不好第二天精神不足，感到很烦躁。你会建议他怎么做？',
          answerList: [
            {
              value: 1,
              label: 'A.用手机与朋友聊天，而不是看视频',
            },
            {
              value: 2,
              label: 'B.设置定时器看视频15分钟，晚上将手机放在另一个房间充电',
            },
            {
              value: 3,
              label: 'C.强迫自己早点睡觉，不要用手机来放松',
            },
            {
              value: 4,
              label: 'D.更早地开始看视频',
            },
          ],
          solution: 2
        },
               {
          title: '爸爸下载了一个应用程序，可以用来与喜欢跑步的朋友联系。该应用程序有一个排行榜，根据每个人一周的运动量获得积分。在考虑是否要接收应用程序的通知时，爸爸应该考虑什么？',
          answerList: [
            {
              value: 1,
              label: 'A.这些通知会激励他去跑步吗？',
            },
            {
              value: 2,
              label: 'B.这些通知是否会分散注意力，让他无法专心做其他事？',
            },
            {
              value: 3,
              label: 'C.这些通知是否让他觉得自己总是需要检查应用程序？',
            },
            {
              value: 4,
              label: 'D.以上所有',
            },
          ],
          solution: 4
        },
                       {
          title: '管理手机使用时间的应用程序一般具有哪些功能？',
          answerList: [
            {
              value: 1,
              label: 'A.各应用使用时长监控',
            },
            {
              value: 2,
              label: 'B.限制某应用的屏幕使用时间',
            },
            {
              value: 3,
              label: 'C.限制手机的停用时间',
            },
            {
              value: 4,
              label: 'D.以上所有',
            },
          ],
          solution: 4
        },
                       {
          title: '我们为什么要合理使用数字设备？',
          answerList: [
            {
              value: 1,
              label: 'A.合理使用数字设备一定可以提高学习成绩',
            },
            {
              value: 2,
              label: 'B.我们希望享受数字设备的好处，而不受其负面影响',
            },
            {
              value: 3,
              label: 'C.数字设备会给我们带来很多伤害，最好不要使用',
            },
            {
              value: 4,
              label: 'D.合理使用数字设备可以立即戒断网络成瘾',
            },
          ],
          solution: 2
        },
                       {
          title: '以下哪项属于不合理地使用数字设备？',
          answerList: [
            {
              value: 1,
              label: 'A.使用应用程序学习英语、做虚拟实验',
            },
            {
              value: 2,
              label: 'B.利用网络上优质的学习资源学习',
            },
            {
              value: 3,
              label: 'C.浏览、记录在网络上查找到的所有相关信息',
            },
            {
              value: 4,
              label: 'D.在网络上寻求专家教师的指导',
            },
          ],
          solution: 3
        },
                       {
          title: '9.我们为什么要在使用数字设备时考虑周围人的感受？',
          answerList: [
            {
              value: 1,
              label: 'A.他们可能想告诉我重要的事情',
            },
            {
              value: 2,
              label: 'B.他们可能需要得到我的关注和安慰',
            },
            {
              value: 3,
              label: 'C.如果我只玩数字设备不关心他们，会伤害他们的感情',
            },
            {
              value: 4,
              label: 'D.以上所有',
            },
          ],
          solution: 4
        },
      ],
    }
},

methods:{
    displayMouse(){
        let hole=document.querySelectorAll('.hole')
        let siteNum1=Math.floor(Math.random()*9)
        let siteNum2=Math.floor(Math.random()*9+2)
        hole[siteNum1].querySelector('.mouse').style.display='block'
        hole[siteNum2].querySelector('.mouse').style.display='none'
      },

    clickMouse(){
        let mouse=document.querySelectorAll('.mouse')
        for(let i=0;i<mouse.length;i++){
          mouse[i].addEventListener('click',function(){
            var that= this
            that.style.display='none'
            console.log(that.nextElementSibling);
            that.nextElementSibling.style.display='block'
            setTimeout(()=>{
              that.nextElementSibling.style.display='none'
              },500)
          })
        }
      },

    showMouse(){
          this.kitchen1Show=false
          this.kitchen2Show=true
          this.mouseShow=true
      },

    handleToClick (num) {
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
        this.b+=1
        if(this.b==5){
           this.tipsShow=true
           this.mouseShow=false
        }
      } else {
        this.$message({
          message: '回答错误！',
          type: 'error'
        });
       if(this.a==2){
         this.a-=1;
         this.life2=false
       }else{
           this.a-=1;
           this.life1=false
           this.overShow=true
       }
      }
    },
    reStart(){
        window.location.reload()
    },
    s3jump3(){
      this.$router.push({ path: '/levelthree/s4' })
    }
},
 mounted(){
    setInterval(this.displayMouse, 2000);
    this.clickMouse();
  },

components:{
    choiceQuestion
}
}
</script>

<style>
.holes{
  width: 600px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 350px;
  top: 30px;
  animation: fadeIn 1s;
}
.hole:hover{
  cursor: url("../../assets/hammer.png"),50px 50px;
}
.hole:active{
  cursor: url("../../assets/hammerDown.png"),50px 50px;
}
.hole{
  width: 170px;
  height: 170px;
  position: relative;
  background:#000000;
}
.hole>img{
  width: 100%;
  height: 100%;
  position: absolute;
}
.hole>img.mouse{
  width: 100px;
  height: 110px;
  z-index: 2;
  top: 30px;
  left: 35px;
  display: none;
}
.hole .boom{
  z-index: 2;
  display: none;
}
.countMouse{
  width: 120px;
  height: 22px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 10px;
  left: 154px;
  top:30px;
  position: absolute;
  animation: fadeIn 2s;
  text-align: center;
}
</style>