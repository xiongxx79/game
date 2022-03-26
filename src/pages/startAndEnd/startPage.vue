<template>
    <div class="bgWrap">
    <div class="bgOut"></div>

    <img src="../../assets/rocket.gif" class="rocket" v-show="loadShow">

    <div class="mapMap" v-show="mapShow">
        <img src="../../assets/bigMap.png" class="bigMap">
        <img src="../../assets/L1.png" class="L1" @click="toLevelOne">
        <img src="../../assets/L2.png" class="L2" @click="toLevelTwo">
        <img src="../../assets/L3.png" class="L3" @click="toLevelThree">
        <img src="../../assets/phoneStore.png" class="phoneStore" @click="toDesignActivity">
    </div>

    <div class="startGame" v-show="startShow">
      <p class="gameName">逃离暗黑手机</p>
      <img 
      src="../../assets/startGameBtn.png" 
      class="startGameBtn"
      @click="startShow=false,startTipsShow=true">
    </div>

    <div>
      <p class="startTips" v-show="startTipsShow">
        √ 初次游戏请按顺序选择关卡哦！
        <br/>
        √ 前三关可以获得丰富的手机壳制作材料！
      </p>

    </div>
  </div>
</template>

<script>
export default {
 name: 'startPage',
 data(){
  return{
    startShow:false,
    loadShow:true,
    mapShow:false,
    startTipsShow:false
  }
},
created(){
      setTimeout(this.valChange,3100);
},
 methods: {
    toLevelOne(){
      this.$router.push({ path: '/levelone/s1' })        
     },
    toLevelTwo(){
      this.$router.push({ path: '/leveltwo/s1' })        
     },
    toLevelThree(){
      this.$router.push({ path: '/levelthree/s1' })        
     },
    toDesignActivity(){
      this.$router.push({ path: '/end/s1' })     
     },
    valChange() {
      this.loadShow=false;
      this.startShow=true;
      this.mapShow=true
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },

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
.rocket{
  width:400px;
  height: 400px;
  left:35%;
  top:10%;
  z-index: 1;
  position: absolute;
}
.mapMap{
  left: 12%;
  top:2%;
  width:76%;
  height:96%;
  z-index: 1;
  position: absolute;
  background:#9cc4e4;
}
.bigMap{
  width: 650px;
  height: 500px;
  margin-left: 200px;
  margin-top: 40px;
}
.L1{
  width:100px;
  height: 100px;
  left:260px;
  top:180px;
  position: absolute;
  cursor:pointer;
  filter: brightness(70%);
}
.L1:hover{
  width:130px;
  height: 130px;
  left:240px;
  top:160px;
  position: absolute;
  cursor: pointer;
  filter: brightness(1.1);
}
.L2{
  width:120px;
  height: 90px;
  left:400px;
  top:240px;
  position: absolute;
  cursor:pointer;
  filter: brightness(70%);
}
.L2:hover{
  width:150px;
  height: 120px;
  left:380px;
  top:220px;
  position: absolute;
  cursor: pointer;
  filter: brightness(1.1);
}
.L3{
  width:150px;
  height: 100px;
  left:620px;
  top:180px;
  position: absolute;
  cursor:pointer;
  filter: brightness(70%);
}
.L3:hover{
  width:180px;
  height: 130px;
  left:600px;
  top:160px;
  position: absolute;
  cursor: pointer;
  filter: brightness(1.1);
}
.phoneStore{
  width:170px;
  height: 120px;
  left:610px;
  top:350px;
  position: absolute;
  cursor:pointer;
  filter: brightness(70%);
}
.phoneStore:hover{
  width:200px;
  height: 150px;
  left:590px;
  top:330px;
  position: absolute;
  cursor:pointer;
  filter: brightness(1.1);
}
.startGame{
  left: 12%;
  top:2%;
  width:76%;
  height:96%;
  background: #000000;
  opacity: 0.76;
  position: absolute;
  z-index: 10;
}

.gameName{
  margin-top: 130px;
  font-size: 72px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
}
.startGameBtn{
  width: 180px;
  height: 80px;
  margin-left: 40%;
  margin-top: 30px;
  cursor: pointer;
}
.startTips{
  font-size: 18px;
  color: #ffffff;
  position: absolute;
  right: 150px;
  top: 30px;
  text-align: right;
  z-index: 100;
  animation: wobble 1s;
}
</style>