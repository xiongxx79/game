<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
     <img src="../../assets/liuKai.png" class="bgIn">

    <el-tooltip class="item" effect="dark" content="手机“设置”里的数字健康功能可以限制应用程序的使用时间" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <el-tooltip class="item2" effect="dark" content="把刘凯每天玩游戏的时间限制为30分钟应该有用" placement="right">
      <el-button>💡已获提示</el-button>
    </el-tooltip>

    <div class="mainBtn5">
           <el-button 
      type="info" 
      plain
      v-if="buttonShow5"
      @click="dialogShow=true"
      >
      喊他试试
      </el-button><br/><br/>
            <el-button 
      type="info" 
      plain
      v-if="buttonShow5"
      @click="dialogShow=true"
      >
      推他试试
      </el-button>
    </div>

    <myDialog 
        @showButton="showBtn" 
        :talkList="talkList"
        v-if="dialogShow">
      </myDialog>

    <img src="../../assets/ylight.png" 
      class="ylight" 
      v-if="lightShow" 
      @click="sJump5"/>

</div>
</template>

<script>
import myDialog from "../../components/myDialog"

export default {
name:"levelOneS5",

data(){
    return{
        buttonShow5:true,
        dialogShow:false,
        lightShow:false,
        talkList:[
            '刘凯！刘凯！没有反应……怎么会这样？！',
            '我要怎么救他呢，刚刚的提示是怎么说的？'
        ],
    }
},

methods:{
    sJump5 () {
      this.$router.push({ path: '/levelone/s6' })
    },
    showBtn(){
        this.lightShow=true
    }
},

components:{
    myDialog
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
.ylight{
  right: 600px;
  bottom: 160px;
  position: absolute;
  cursor: pointer;
  width:  100px;
  height: 100px;
  animation: rotateIn 2s infinite;
  z-index: 10;
}
</style>