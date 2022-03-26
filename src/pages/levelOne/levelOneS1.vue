<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
        <img src="../../assets/BasketballCourt.jpg" class="bgIn">

    <audio autoplay loop>
      <source src="../../assets/bgm1.mp3" type="audio/mp3" />
    </audio>

    <div>
      <myDialog 
        @showButton="showBtn" 
        :talkList="talkList1"
        v-if="dialogShow1">
      </myDialog>
    </div>

    <div v-if="sirShow">
      <p class="sirTalk">哈哈哈，找不到你的朋友了吗，他已经被我们关起来了，你要是有本事就去找找看吧！</p>
      <img src="../../assets/phoneSir.png" class="phoneSir">
    </div>

      <el-button 
      type="info" 
      plain
      class="mainButton"
      v-if="buttonShow1"
      @click="dialogShow1=buttonShow1=false,dialogShow2=true"
      >
      什么？！
      </el-button>

      <div>
      <myDialog 
        @showButton="showBtn2" 
        :talkList="talkList2"
        v-if="dialogShow2">
      </myDialog>
    </div>

      <el-button 
      type="info" 
      plain
      class="mainButton"
      v-if="buttonShow2"
      @click="sJump1"
      >
      前往篮球场门口
      </el-button>
  </div>
</template>

<script>
import myDialog from "../../components/myDialog"

export default {
  name: 'levelOneS1',

  data () {
    return {
      dialogShow1:true,
      dialogShow2:false,
      sirShow:false,
      buttonShow1:false,
      buttonShow2:false,
      talkList1: [
        '哎呀，今天约了刘凯一起参加篮球比赛的，还有十几分钟球赛就开始了,<br/>怎么不见他人呢',
        '给他打电话也不接，没办法了，去他家找找他吧~'
      ],
      talkList2:[
        '刘凯怎么会被小小的手机控制！我应该去哪儿找他呢',
        '去篮球场门口看看吧，那应该是刘凯被抓走的地方，会不会留下什么线索？'
      ]
    }
  },
  methods: {
    handleToJump: () => {

    },
    sJump1 () {
      this.$router.push({ path: '/levelone/s2' })
    },
    showBtn (data) {
      this.sirShow = data
      this.buttonShow1 = data
    },
    showBtn2 (data) {
      this.buttonShow2 = data
    }
  },

  components: {
    myDialog
  }
}

</script>

<style>
.bgWrap{
  width: 100%;
  height: 100%;
  background: #39619b;
}
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
.goBtn {
  right: 200px;
  bottom: 150px;
  position: absolute;
  cursor: pointer;
  width: 120px;
  height: 40px;
  border-style: groove;
  border-color: black;
  border-radius: 5px;
  border-width: 2px;
  background: #efc813;
  animation: fadeIn 1s;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#vd{
  width: 100px;
}
.sirTalk{
  width: 300px;
  height: 70px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 20px;
  right: 400px;
  top:90px;
  position: absolute;
  animation: fadeIn 2s;
}
.phoneSir{
  width: 200px;
  height: 260px;
  right: 350px;
  top:150px;
  position: absolute;
  animation: fadeIn 1s;
}
.mainButton{
  right: 250px;
  bottom: 140px;
  font-weight: 600;
  position: absolute;
  animation: fadeIn 4s;
}
</style>