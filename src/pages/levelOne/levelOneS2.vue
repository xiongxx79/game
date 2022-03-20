<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
    <img src="../../assets/clueFindOne.jpg" class="bgIn" />
    <audio autoplay loop>
      <source src="../../assets/bgm1.mp3" type="audio/mp3" />
    </audio>
    <div>
      <img
        src="../../assets/popCan.png"
        class="popCan"
        @click="() => handleToClick(0)"
      />
      <img
        src="../../assets/basketBall.png"
        @click="() => handleToClick(1)"
        class="basketBall"
      />
      <img
        src="../../assets/stone.png"
        @click="() => handleToClick(2)"
        class="stone"
      />
      <img
        src="../../assets/roadLap.png"
        @click="() => handleToClick(3)"
        class="roadLap"
      />
      <img
        src="../../assets/fourGrass.png"
        @click="() => handleToClick(4)"
        class="fourGrass"
      />
    </div>
    <choiceQuestion
      v-show="quesShow"
      :question="question"
      @sendAnswer="getAnswer"
    ></choiceQuestion>
  </div>
</template>

<script>
import choiceQuestion from "../../components/choiceQuestion"

export default {
  name: 'levelOneS2',
  data () {
    return {
      quesShow: false,
      question: {},
      questionList: [
        {
          title: '1.狭义的数字技术是指将图、文、声、像等信息转化为计算机能识别的（）数字“0”和“1”后，对其进行运算、加工、存储、传播的技术。',
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
          title: '2.我国青少年网络成瘾发病率在（）左右。',
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
      ],
    }
  },
  methods: {
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
      } else {
        this.$message({
          message: '回答错误！',
          type: 'error'
        })
      }
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
</style>