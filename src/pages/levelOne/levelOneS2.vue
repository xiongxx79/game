<template>
  <div class="oneWrap2">
    <router-link class="btn" to="/levelone/s1">第一关</router-link>
    <img
      src="../../assets/arrow.png"
      class="bigArrow"
      @click="moveLeft"
      v-show="show1"
    />
    <img src="../../assets/text2.png" class="text2" v-show="show2" />
    <img src="../../assets/leaf.png" :class="show3" />
    <myDialog v-show="show4" :talkList="talkList"></myDialog>
    <img src="../../assets/smallPaper.png" :class="show5" @click="alertPaper" />
    <div>
      <img src="../../assets/paper.png" class="paper" v-show="show6" />
      <img
        src="../../assets/closeBtn.png"
        class="closeBtn"
        v-show="show6"
        @click="putDown"
      />
    </div>
    <div>
      <img src="../../assets/callHim.png" class="callHim" />
      <img src="../../assets/pushHim.png" class="pushHim" />
    </div>
  </div>
</template>

<script>

import myDialog from "../../components/myDialog"

export default {
  name: 'levelOneS2',

  data () {
    return {
      show1: true,
      show2: true,
      show3: "leaf",
      show4: false,
      show5: false,
      show6: false,
      talkList: [
        '哎呀，今天约了刘凯一起参加篮球比赛的，还有十几分钟球赛就开始了,<br/>怎么不见他人呢',
        '给他打电话也不接，没办法了，去他家找找他吧~'
      ]
    }
  },
  methods: {
    moveLeft () {
      this.show1 = false
      this.show2 = false
      this.show3 = "leaf2"
      this.show4 = true
    },
    alertPaper () {
      this.show5 = "smallPaper2"
      this.show6 = true
    },
    putDown () {
      this.show6 = false
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
  background: #000000 url("../../assets/home.png") top/80% 100% no-repeat;
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
}
.paper {
  width: 82%;
  height: 100%;
  position: absolute;
  left: 120px;
  top: 0px;
}
.closeBtn {
  width: 20px;
  height: 20px;
  bottom: 440px;
  right: 500px;
  z-index: 1000;
  position: absolute;
  cursor: pointer;
}
.pushHim {
  width: 180px;
  height: 75px;
  position: absolute;
  bottom: 175px;
  left: 500px;
  cursor: pointer;
}
.callHim {
  width: 180px;
  height: 75px;
  position: absolute;
  bottom: 250px;
  left: 500px;
  cursor: pointer;
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

/* .btn {
  height: 20px;
  width: 100px;
  display: inline-block;
  font-size: 18px;
  margin: 10px;
} */
</style>