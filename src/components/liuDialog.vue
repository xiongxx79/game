<template>
  <div style="z-index:1000">
    <div>
      <div class="square2"></div>
      <span class="text2" v-html="msg"></span>
      <button class="conti2" v-show="isShow1" @click="handleToNext" >
      ▼ 继续
      </button>
      <img src="../assets/liukaiHead.png" class="img2" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'liuDialog',
  props: ['talkListLiu'],

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
      if (this.talkListLiu.length !== 0) {
        this.msg = this.talkListLiu.shift()
      } else {
        this.isShow1 = false
        this.$emit('showButtonLiu', true)
      }
    }
  },
   mounted () {
    this.msg = this.talkListLiu.shift()
  }
}
</script>

<style>
.square2 {
  background-color: #cdcdcd;
  position: absolute;
  opacity: 0.7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  left: 12%;
  bottom:2%;
  width:76%;
  height:15%;
  position: absolute;
}
.img2 {
  width: 180px;
  height: 180px;
  position: absolute;
  bottom: 2%;
  left: 15%;
  animation: fadeInLeft;
  animation-duration: 2s;
}
.conti2 {
  right: 200px;
  bottom: 20px;
  position: absolute;
  font-size: 16px;
  background: none;
  border-style: none;
  cursor: pointer;
}
.text2 {
  font-size: 18px;
  position: absolute;
  left: 400px;
  bottom: 35px;
}
</style>