<template>
  <div class="bgWrap2">
    <div class="bgOut"></div>
     <img src="../../assets/mengmeng.png" class="bgIn">

    <audio id="liukai3">
      <source src="../../assets/liukai3.mp3" type="audio/mp3" />
    </audio>

    <el-tooltip class="item" effect="dark" content="“交友圈”大量的消息提醒让梦梦很烦躁" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item2" effect="dark" content="梦梦因为沉迷社交媒体错过了与朋友的野餐，没能完成寒假作业" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item3" effect="dark" content="在手机设置的“通知”功能里关闭“交友圈”的消息通知应该有用" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <div class="mainBtn5">
           <el-button 
      type="info" 
      plain
      v-if="buttonShow5"
      @click="showLiuDialog"
      >
      喊她试试
      </el-button><br/><br/>
            <el-button 
      type="info" 
      plain
      v-if="buttonShow5"
      @click="showLiuDialog"
      >
      推她试试
      </el-button>
    </div>

    <liuDialog 
        @showButtonLiu="showBtnLiu" 
        :talkListLiu="talkList"
        v-if="liuDialogShow">
    </liuDialog>

    <img src="../../assets/ylight.png" 
      class="ylight2" 
      v-if="lightShow" 
      @click="s2Jump5"/>

</div>
</template>

<script>
import liuDialog from "../../components/liuDialog"

export default {
name:"levelOneS5",

data(){
    return{
        buttonShow5:true,
        liuDialogShow:false,
        lightShow:false,
        talkList:[
            '快用刚刚找到的线索救出她吧！'
        ],
    }
},

methods:{
    s2Jump5 () {
      this.$router.push({ path: '/leveltwo/s6' })
    },
    showLiuDialog(){
      document.getElementById('liukai3').play()
      this.liuDialogShow=true
    },
    showBtnLiu(){
        this.lightShow=true
    }
},

components:{
    liuDialog
}
}
</script>

<style>
.mainBtn5{
  right: 480px;
  bottom: 200px;
  font-weight: 600;
  position: absolute;
  animation: fadeIn 2s;
}
.ylight2{
  left: 530px;
  bottom: 130px;
  position: absolute;
  cursor: pointer;
  width:  100px;
  height: 100px;
  animation: rotateIn 2s infinite;
  z-index: 10;
}
</style>