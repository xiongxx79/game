<template>
  <div class="oneWrap1">
    <div>
      <myDialog @showButton="showBtn" :talkList="talkList"></myDialog>
      <img
        src="../../assets/goBtn.png"
        class="goBtn"
        v-show="isShow2"
        v-on:click="jump"
      />
    </div>
    <!-- <router-link class="btn" to="/level/two">第二关</router-link> -->
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
.oneWrap1 {
  width: 100%;
  height: 100%;
  background: black url("../../assets/BasketballCourt.jpg") top/80% 100%
    no-repeat;
  background-size: contains;
}
.goBtn {
  right: 200px;
  bottom: 15px;
  position: absolute;
  cursor: pointer;
  width: 150px;
  height: 60px;
}

/* .btn {
  height: 20px;
  width: 100px;
  display: inline-block;
  font-size: 18px;
  margin: 10px;
} */
</style>