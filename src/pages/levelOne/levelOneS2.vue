<template>
   <div class="bgWrap">
    <div class="bgOut"></div>
        <img src="../../assets/clueFindOne.jpg" class="bgIn">
    <audio autoplay loop>
      <source src="../../assets/bgm1.mp3" type="audio/mp3" />
    </audio>
    <div>
        <img src="../../assets/popCan.png" class="popCan" @click="quesShow1=true">
        <img src="../../assets/basketBall.png" class="basketBall">
        <img src="../../assets/stone.png" class="stone">
        <img src="../../assets/roadLap.png" class="roadLap">
        <img src="../../assets/fourGrass.png" class="fourGrass">
    </div>
    <choiceQuestion v-show="quesShow1" :quesList="quesList1" @anSwer="getAnswer"></choiceQuestion>

     <div>
        <img src="../../assets/lifeOutLine.png" class="life">
        <img src="../../assets/lifeHeart.png" class="life">
        <img src="../../assets/lifeOutLine.png" class="life2">
        <img src="../../assets/lifeHeart.png" class="life2">
     </div>
  </div>
</template>

<script>
import choiceQuestion from "../../components/choiceQuestion"

export default {
  name: 'levelOneS2',
  data(){
      return{
        quesShow1:false,
        quesList1:[
        '1.狭义的数字技术是指将图、文、声、像等信息转化为计算机能识别的（）数字“0”和“1”后，对其进行运算、加工、存储、传播的技术。',
        'A.	十进制',
        'B.	二进制',
        'C.	八进制',
        'D.	十六进制'    
        ]
      }
  },
  methods:{
    getAnswer(data){
      if(data=='B'){
          this.$message({
          message: '回答正确！',
          type: 'success'
        });
      } else{
          this.$message({
          message: '回答错误！',
          type: 'error'
          });
      }
    }
  },
  components: {
    choiceQuestion
  }
}
</script>

<style>
.bgOut{
  width: 78%;
  height: 100%;
  background:#ffffff;
  left: 11%;
  position: absolute;
}
.bgIn{
  left: 12%;
  top:2%;
  width:76%;
  height:96%;
  position: absolute;
}
.popCan{
    width: 40px;
    height: 20px;
    left: 340px;
    bottom: 120px;
    z-index: 1;
    position:absolute;
    cursor: pointer;
}
.basketBall{
    width: 30px;
    height: 30px;
    right: 200px;
    bottom: 170px;
    z-index: 1;
    position:absolute;
    cursor: pointer;
}
.stone{
    width: 40px;
    height: 30px;
    left: 880px;
    bottom: 60px;
    z-index: 1;
    position:absolute;
    cursor: pointer;
}
.roadLap{
    width: 50px;
    height: 100px;
    left: 200px;
    bottom: 200px;
    z-index: 1;
    position:absolute;
    cursor: pointer;
}
.fourGrass{
    width: 30px;
    height: 30px;
    right: 500px;
    bottom: 20px;
    z-index: 1;
    position:absolute;
    cursor: pointer;
}
.bgWrap{
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
</style>