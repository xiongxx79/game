<template>
  <div class="oneWrap2">
    <img src="../../assets/home.png" class="backGro">
    <audio autoplay loop>
      <source src="../../assets/bgm1.mp3" type="audio/mp3" />
    </audio>
    <img 
    src="../../assets/arrow.png" 
    class="bigArrow" 
    @click="moveLeft" 
    v-show="show1" />

    <img 
    src="../../assets/text2.png" 
    class="text2" 
    v-show="show2" />

    <img 
    src="../../assets/leaf.png" 
    :class="show3" />

    <div>
      <img 
      src="../../assets/callHim.png" 
      class="callHim" 
      v-if="show7" 
      @click="showDialog" />

      <img src="../../assets/pushHim.png" 
      class="pushHim" v-if="show7" 
      @click="showDialog"/>
    </div>

    <myDialog 
    v-show="show4" 
    :talkList="talkList" 
    @showButton="showBtn">
    </myDialog>

    <img 
    src="../../assets/goBtn2.png" 
    class="goBtn2" 
    v-if="show8" 
    @click="nextTo" />
    
    <div>
      <img 
      src="../../assets/smallPaper.png" 
      :class="spClass" 
      v-show="show5" 
      @click="alertPaper" />

      <img 
      src="../../assets/paper.png" 
      class="paper" 
      v-show="show6" />

      <img 
      src="../../assets/closeBtn.png" 
      class="closeBtn" 
      v-show="show6" 
      @click="putDown" />

      <img 
      src="../../assets/tip.png" 
      class="tip" v-if="show9" />

      <img src="../../assets/ylight.png" 
      class="ylight" 
      v-if="show10" 
      @click="showLetter"/>

      <img 
      src="../../assets/letter.png" 
      class="letter" 
      v-if="show11" />

      <img src="../../assets/inBtn.png" 
      class="inBtn" 
      v-if="show11"
      @click="jump2"/>
  
    </div>
  </div>
</template>

<script>

import myDialog from "../../components/myDialog"

export default {
  name: 'levelOneS2Old',

  data () {
    return {
      show1: true,
      show2: true,
      show3: "leaf",
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      spClass:"smallPaper1",
      talkList: [
        '刘凯！刘凯！',
        '没有反应……怎么会这样？！他这是怎么了……',
        '难道……这就是刚刚手机说的黑暗力量吗？我应该怎么救他呢……',
        '咦，那里好像有什么发光的东西'
      ]
    }
  },
  methods: {
    moveLeft () {
      this.show1 = false
      this.show2 = false
      this.show3 = "leaf2"
      this.show7 = true
    },
    showDialog(){
      this.show4=true
    },
    showBtn (data) {
    this.show8 = data
    },
    nextTo(){
    this.show4=false
    this.show8=false
    this.show5=true
    this.show7 = false
    },
    alertPaper () {
      this.spClass = "smallPaper2"
      this.show6 = true
    },
    putDown () {
      this.show6 = false
      this.show9 = true
      this.show10 = true
    },
    showLetter(){
      this.show11 = true
    },
    jump2 () {
      this.$router.push({ path: '/levelone/s3' })
    }
  },
  components: {
    myDialog
  }
}
</script>

<style>
.oneWrap2 {
  width: 100%;
  height: 100%;
  background:#39619b ;
  background-size: contains;
}
.bigArrow {
  margin-top: 340px;
  margin-left: 620px;
  width: 90px;
  height: 90px;
  animation: pulse 0.7s infinite;
  cursor: pointer;
}
.text2 {
  margin-top: 0px;
  padding: 0px;
  margin-left: 550px;
  width: 200px;
  height: 25px;
}
.leaf {
  margin-top: -300px;
  margin-left: 800px;
  width: 260px;
  height: 330px;
}
.leaf2 {
  animation: flipOutY 2s;
  margin-top: 160px;
  margin-left: 750px;
  width: 260px;
  height: 330px;
  opacity: 0;
}
.smallPaper1 {
  left: 200px;
  bottom: 20px;
  width: 200px;
  height: 150px;
  position: absolute;
  cursor: pointer;
  animation: flash 3s infinite;
}
.smallPaper2 {
  left: 200px;
  bottom: 20px;
  width: 200px;
  height: 150px;
  position: absolute;
  cursor: pointer;
}
.paper {
  width: 82%;
  height: 100%;
  position: absolute;
  left: 120px;
  top: 0px;
  animation: zoomIn 1s;
  z-index: 1;
}
.closeBtn {
  width: 20px;
  height: 20px;
  bottom: 440px;
  right: 500px;
  z-index: 1000;
  position: absolute;
  cursor: pointer;
  animation: fadeIn 2s;
}
.pushHim {
  width: 180px;
  height: 75px;
  position: absolute;
  bottom: 175px;
  left: 500px;
  cursor: pointer;
  animation: fadeInLeft 1s;
}
.callHim {
  width: 180px;
  height: 75px;
  position: absolute;
  bottom: 250px;
  left: 500px;
  cursor: pointer;
  animation: fadeInLeft 1s;
}
.pushHim:hover {
  width: 190px;
  height: 80px;
  position: absolute;
  bottom: 175px;
  left: 500px;
  cursor: pointer;
}
.callHim:hover {
  width: 190px;
  height: 80px;
  position: absolute;
  bottom: 250px;
  left: 500px;
  cursor: pointer;
}
.goBtn2 {
  right: 200px;
  bottom: 15px;
  position: absolute;
  cursor: pointer;
  width: 150px;
  height: 50px;
  animation: fadeIn 1s;
}
.tip{
  left: 200px;
  bottom: 200px;
  position: absolute;
  width: 500px;
  height: 300px;
  animation: fadeIn 2s;
}
.ylight{
  right: 250px;
  bottom: 205px;
  position: absolute;
  cursor: pointer;
  width:  100px;
  height: 100px;
  animation: rotateIn 2s infinite;
}
.letter {
  width: 80%;
  height: 100%;
  position: absolute;
  left: 128px;
  top: 0px;
  animation: zoomIn 1s;
  z-index: 1;
}
.inBtn{
  width: 110px;
  height: 30px;
  position: absolute;
  right: 500px;
  bottom: 150px;
  animation: fadeIn 3s;
  z-index: 1;
  cursor: pointer;
}
</style>