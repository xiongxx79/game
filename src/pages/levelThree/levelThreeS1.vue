<template>
  <div class="bgWrap3">
    <div class="bgOut"></div>
        <img src="../../assets/level3Bg1.png" class="bgIn">

    <audio autoplay>
      <source src="../../assets/hero6.mp3" type="audio/mp3" />
    </audio>

        <myDialog 
            @showButton="showBtn" 
            :talkList="talkList">
        </myDialog>

        <el-button 
            type="info" 
            plain
            class="mainButton"
            v-if="buttonShow"
            @click="s3jump1"
            >
            回家
        </el-button>

</div>
</template>

<script>
import myDialog from "../../components/myDialog"

export default {
name:"levelThreeS1",

data(){
    return{
        talkList:[
            '呼~今天累了一天，终于回到家了',
            '进去看看妈妈做了什么好吃的'
        ],
        buttonShow:false

    }
},

methods:{
    showBtn(){
        this.buttonShow=true
    },
    s3jump1(){
        this.$router.push({ path: '/levelthree/s2' })
    }
},

components:{
    myDialog
}
}
</script>

<style>
.bgWrap3{
  width: 100%;
  height: 100%;
  background: #5cb7d4;
}
</style>