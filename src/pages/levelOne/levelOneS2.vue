<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
    <img src="../../assets/clueFindOne.jpg" class="bgIn" />

    <audio autoplay loop>
      <source src="../../assets/bgm1.mp3" type="audio/mp3" />
    </audio>

    <p class="levelTip">找出隐藏在场景中的5个线索</p>
      <div>
        <img src="../../assets/lifeOutLine.png" class="life">
        <img src="../../assets/lifeHeart.png" class="life" v-show="life1">
        <img src="../../assets/lifeOutLine.png" class="life2">
        <img src="../../assets/lifeHeart.png" class="life2" v-show="life2">
      </div>
    <div>
      <img
        src="../../assets/popCan.png"
        class="popCan"
        @click="() => handleToClick(0)"
        v-if="popShow"
      />
      <img
        src="../../assets/basketBall.png"
        @click="() => handleToClick(1)"
        class="basketBall"
        v-if="basketballShow"
      />
      <img
        src="../../assets/stone.png"
        @click="() => handleToClick(2)"
        class="stone"
        v-if="stoneShow"
      />
      <img
        src="../../assets/roadLap.png"
        @click="() => handleToClick(3)"
        class="roadLap"
        v-if="lapShow"
      />
      <img
        src="../../assets/fourGrass.png"
        @click="() => handleToClick(4)"
        class="fourGrass"
        v-if="grassShow"
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
          <p style="font-size:18px">√ 刘凯最近走到哪里都带着手机玩游戏，今天提前几分钟到了球场就坐在门口玩游戏。</p><br/>
          <p style="font-size:18px">√ 手机“设置”里的数字健康功能可以限制应用程序的使用时间。</p><br/>     
      </div>
      <div class="tipsOut">
          <p class="tipsTitle">提示2：</p>
          <br/><br/>
          <img src="../../assets/smallMap.png" 
          width="200px" 
          height="100px" 
          style="margin-left:15px">
          <br/>
          <p style="font-size:18px">√ 这好像是一张通往某个仓库的地图...</p><br/>
          <el-button 
          type="success" 
          plain 
          style="margin-left:30%;font-weight:600"
          @click="sJump2"
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
  name: 'levelOneS2',
  data () {
    return {
      a:2,
      life1:true,
      life2:true,
      overShow:false,
      quesShow: false,
      popShow:true,
      lapShow:true,
      stoneShow:true,
      grassShow:true,
      basketballShow:true,
      tipsShow:false,
      question: {},
      questionList: [
        {
          title: '狭义的数字技术是指将图、文、声、像等信息转化为计算机能识别的（）数字“0”和“1”后，对其进行运算、加工、存储、传播的技术。',
          answerList: [
            {
              value: 1,
              label: 'A.	十进制',
            },
            {
              value: 2,
              label: 'B.	二进制',
            },
            {
              value: 3,
              label: 'C.	八进制',
            },
            {
              value: 4,
              label: 'D.	十六进制',
            },
          ],
          solution: 2
        },
        {
          title: '我国青少年网络成瘾发病率在（）左右。',
          answerList: [
            {
              value: 1,
              label: 'A. 8%',
            },
            {
              value: 2,
              label: 'B.	20%',
            },
            {
              value: 3,
              label: 'C.	15%',
            },
            {
              value: 4,
              label: 'D.	10%',
            },
          ],
          solution: 4
        },
        {
          title: '网络成瘾是一种（）。',
          answerList: [
            {
              value: 1,
              label: 'A. 身体疾病',
            },
            {
              value: 2,
              label: 'B. 精神心理疾病',
            },
            {
              value: 3,
              label: 'C. 爱好',
            },
            {
              value: 4,
              label: 'D. 强迫症',
            },
          ],
          solution: 2
        },
               {
          title: '广义的数字技术是指（）',
          answerList: [
            {
              value: 1,
              label: 'A. 人工智能技术',
            },
            {
              value: 2,
              label: 'B.	大数据技术',
            },
            {
              value: 3,
              label: 'C.	5G技术',
            },
            {
              value: 4,
              label: 'D.	以上都是',
            },
          ],
          solution: 4
        },
               {
          title: '以下属于网络成瘾的有（）',
          answerList: [
            {
              value: 1,
              label: 'A.	网络游戏成瘾',
            },
            {
              value: 2,
              label: 'B.	网络关系成瘾',
            },
            {
              value: 3,
              label: 'C.	信息收集成瘾',
            },
            {
              value: 4,
              label: 'D.	以上都是',
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
        this.popShow=false
      }else{
        if(num==1){
          this.basketballShow=false
        }else{
          if(num==2){
            this.stoneShow=false
          }else{
            if(num==3){
              this.lapShow=false
            }else{
              this.grassShow=false
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
        if(this.popShow==false && this.basketballShow==false && this.stoneShow==false && this.lapShow==false && this.grassShow==false){
           this.tipsShow=true
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
    sJump2(){
      this.$router.push({ path: '/levelone/s3' })
    }
  },
  components: {
    choiceQuestion
  }
}
</script>

<style>
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
.popCan {
  width: 40px;
  height: 20px;
  left: 340px;
  bottom: 120px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.basketBall {
  width: 30px;
  height: 30px;
  right: 200px;
  bottom: 170px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.stone {
  width: 40px;
  height: 30px;
  left: 880px;
  bottom: 60px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.roadLap {
  width: 50px;
  height: 100px;
  left: 200px;
  bottom: 200px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.fourGrass {
  width: 30px;
  height: 30px;
  right: 500px;
  bottom: 20px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.bgWrap {
  width: 100%;
  height: 100%;
  background: #39619b;
}
.life{
    width: 50px;
    height: 50px;
    top:30px;
    right: 200px;
    z-index: 100;
    position: absolute;
    }
.life2{
    width: 50px;
    height: 50px;
    top:30px;
    right: 250px;
    z-index: 100;
    position: absolute;
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
.levelTip{
  width: 230px;
  height: 20px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 20px;
  right: 500px;
  top:30px;
  position: absolute;
  animation: wobble 2s;
  text-align: center;
}
</style>