<template>
  <div class="twoWrap1">
    <video
      width="100%"
      height="100%"
      autoplay
      @ended="stopVideo()"
      v-show="dshow1"
    >
      <source src="../../assets/homeTv.mp4" type="video/mp4" />
    </video>
    <img
      src="../../assets/daddy.png"
      width="80%"
      height="100%"
      v-show="dshow2"
      style="margin-left: 10%"
    />

     <myDialog  
        v-show="dshow2" 
        :talkList="talkList"
        @showButton="showLight">
    </myDialog>
      
    <img src="../../assets/ylight.png" class="ylight2" v-if="dshow3" @click="jump4"/>

  </div>
</template>

<script>

import myDialog from "../../components/myDialog"

export default {
  name: 'levelTwoS1',

  data () {
    return {
      dshow1: true,
      dshow2: false,
      dshow3:false,
      talkList: [
        '爸爸！爸爸！……',
        '不行，得赶紧救爸爸回来，不然一会儿老妈又要发火了',
        '怎么办呢，先进他的手机看看吧',
      ]
    }
  },

  methods: {
    stopVideo () {
      this.dshow1 = false
      this.dshow2 = true
    },
    showLight(data){
      this.dshow3=data
    },
    jump4(){
      this.$router.push({ path: '/leveltwo/s2' })
    }
    },
  components: {
    myDialog
  }
}
</script>

<style>
.twoWrap1 {
  width: 100%;
  height: 100%;
  background: black;
  background-size: contains;
}
.ylight2{
  right: 500px;
  bottom: 150px;
  position: absolute;
  cursor: pointer;
  width:  100px;
  height: 100px;
  animation: rotateIn 2s infinite;
}
</style>