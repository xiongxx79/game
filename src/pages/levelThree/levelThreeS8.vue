<template>
  <div class="bgWrap3">
    <div class="bgOut"></div>
     <img src="../../assets/daddy2.png" class="bgIn">

    <audio autoplay>
      <source src="../../assets/hero9.mp3" type="audio/mp3" />
    </audio>

    <audio id="dadtalk">
      <source src="../../assets/dadtalk.mp3" type="audio/mp3" />
    </audio>

    <audio id="successPass">
      <source src="../../assets/successPass.mp3" type="audio/mp3" />
    </audio>

    <myDialog 
        @showButton="showBtn" 
        :talkList="talkList">
    </myDialog>

    <div class="dadTalk" v-if="talkShow">
        这......对不起啊孩子，我竟然都没注意到自己伤害到了你们的感情。
        看视频的时间总是过的很快，我最近好像什么有意义的事都没做，身体也变差了。
        从今天开始，爸爸像你保证，不再看视频了，我们一起去运动！
    </div>

        <img src="../../assets/successBg.png" class="successBg" v-show="passShow">

        <el-button 
           type="success" 
           plain 
           class="backMapBtn"
           v-show="passShow" 
           @click="jumpMap">
           返回地图
        </el-button>
</div>
</template>

<script>
import myDialog from "../../components/myDialog"

export default {
name:"levelThreeS8",

data(){
    return{
        passShow:false,
        talkShow:false,
        talkList: [
        '爸爸，我想认真地和你说，最近你看视频的时间太长了',
        '我和妈妈开心地和你分享事情你经常随口应付我们',
        '我希望你能多和我们聊聊天，或者和我们出去玩......'
      ],
    }
},
methods:{
    showBtn() {
      document.getElementById('dadtalk').play()
      this.talkShow=true
      setTimeout(() => {
        this.passShow=true
        document.getElementById('successPass').play()
        }, 18000)
    },
    jumpMap () {
      this.$router.push({ path: '/map' })
    },

},

components:{
    myDialog
}
}
</script>

<style>
.dadTalk{
  width: 400px;
  height: 120px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;
  padding: 20px;
  left: 350px;
  top: 100px;
  animation: fadeIn 2s;
  position: absolute;
}
</style>