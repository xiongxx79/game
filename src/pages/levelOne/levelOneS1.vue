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
        :talkList="talkList">
      </myDialog>
      <button class="goBtn" @click="jump">找线索</button>
    </div>
  </div>
</template>

<script>
import myDialog from "../../components/myDialog"

export default {
  name: 'levelOneS1',

  data () {
    return {
      isShow2: false,
      talkList: [
        '哎呀，今天约了刘凯一起参加篮球比赛的，还有十几分钟球赛就开始了,<br/>怎么不见他人呢',
        '给他打电话也不接，没办法了，去他家找找他吧~'
      ]
    }
  },
  methods: {
    handleToJump: () => {

    },
    jump () {
      this.$router.push({ path: '/levelone/s2' })
    },
    showBtn (data) {
      this.isShow2 = data
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

</style>