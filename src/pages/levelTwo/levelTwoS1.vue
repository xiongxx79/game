<template>
<div class="twoWrap1">
  <video width="100%" height="100%" controls="controls" :onended="stopVideo()" v-show="dshow1">
  <source src="../../assets/homeTv.mp4" type="video/mp4" />
  </video>
  <img src="../../assets/daddy.png" width="80%" height="100%" v-show="dshow2" style="margin-left:10%">
</div>
</template>

<script>
export default {
  name: 'levelTwoS1',

data(){
  return{
    dshow1:true,
    dshow2:false

  }
},

methods:{
  stopVideo(){
    this.dshow1=false
    this.dshow2=true
  }
}
}
</script>

<style>
.twoWrap1{
  width: 100%;
  height: 100%;
  background: black;
  background-size: contains;
}
</style>