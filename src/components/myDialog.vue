<template>
  <div> 
      <div>
          <div class="square"></div>
          <span class="text" v-html="speak[i]"></span>
          <button class="conti"  v-on:click='theNext' v-show="isShow1">▼ 继续</button>
          <img src="../assets/hero.png" class="img">
      </div>
      
  </div>
  
</template>

<script>

export default {
  name:'myDialog',
    
  data(){
        return {
            i:0,
            isShow1:true,
            speak:['哎呀，今天约了刘凯一起参加篮球比赛的，还有十几分钟球赛就开始了,<br/>怎么不见他人呢？','给他打电话也不接，没办法了，去他家找找他吧~']
        }
        
    },

  methods:{
      theNext(){
          this.i++;
          while(this.i==this.speak.length){
              this.i=this.speak.length-1;
              this.isShow1=false;
              this.$emit('showButton',this.isShow1)
          }
      }
      },
    }
</script>

<style>
.square{
    background-color:#cdcdcd;
    width: 80%;
    height: 20%;
    margin-left: 10%;
    position: absolute;
    bottom: 0;
    border-radius: 2px;
    opacity: 0.7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.img{
    width: 150px;
    height: 200px;
    position:absolute;
    bottom: 0;
    left: 15%;
    opacity: 0.9;
    animation:fadeInLeft;
    animation-duration: 2s; 
}
.conti{
    right: 200px;
    bottom: 20px;
    position: absolute;
    font-size: 16px;
    background: none;
    border-style: none;
    cursor:pointer;
}
.text{
    font-size: 18px;
    position: absolute;
    bottom: 35px;
    left: 400px;
}

</style>