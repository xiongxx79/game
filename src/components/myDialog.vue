<template>
  <div style="z-index:1000">
    <div>
      <div class="square"></div>
      <span class="text" v-html="msg"></span>
      <button class="conti" v-show="isShow1" @click="handleToNext" >
      ▼ 继续
      </button>
      <img src="../assets/hero.png" class="img" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'myDialog',
  props: ['talkList'],

  data () {
    return {
      i: 0,
      isShow1: true,
      speak: [],
      msg: ''
    }
  },

  methods: {
    handleToNext () {
      if (this.talkList.length !== 0) {
        this.msg = this.talkList.shift()
      } else {
        this.isShow1 = false
        this.$emit('showButton', true)
      }
    }
  },
  mounted () {
    this.msg = this.talkList.shift()
  }
}
</script>

<style>
.square {
  background-color: #cdcdcd;
  position: absolute;
  opacity: 0.7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  left: 12%;
  bottom:2%;
  width:76%;
  height:20%;
  position: absolute;
}
.img {
  width: 135px;
  height: 180px;
  position: absolute;
  bottom: 2%;
  left: 15%;
  animation: fadeInLeft;
  animation-duration: 2s;
}
.conti {
  right: 200px;
  bottom: 20px;
  position: absolute;
  font-size: 16px;
  background: none;
  border-style: none;
  cursor: pointer;
}
.text {
  font-size: 18px;
  position: absolute;
  left: 400px;
  bottom: 35px;
}
</style>