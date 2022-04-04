<template>
<div class="bgWrap2">
    <div class="bgOut"></div>
        <img src="../../assets/river.png" class="bgIn">

    <myDialog 
        @showButton="showBtn" 
        :talkList="talkList1"
        v-if="dialogShow1"
        >
    </myDialog>

    <liuDialog 
        @showButtonLiu="showBtnLiu" 
        :talkListLiu="talkList2"
        v-if="liuDialogShow">
    </liuDialog>

    <myDialog 
        @showButton="showBtn2" 
        :talkList="talkList3"
        v-if="dialogShow2"
        >
    </myDialog>
    
     <el-button 
      type="info" 
      plain
      class="mainButton"
      v-if="buttonShow"
      @click="s2Jump1"
      >
      去河边看看
      </el-button>
</div>
</template>

<script>
import myDialog from "../../components/myDialog"
import liuDialog from "../../components/liuDialog"

export default {
name:"levelTwoS1",

data(){
    return{
      liuDialogShow:false,
      dialogShow1:true,
      dialogShow2:false,
      buttonShow:false,
      talkList1: [
        '现在我可以和刘凯一起去打篮球了',
        '等等，河对岸怎么还有一个仓库，那......那不是梦梦吗？',
      ],
      talkList2:[
        '啊，她怎么也被关起来了',
        '我们快过去救她吧！'
      ],
      talkList3:[
        '可是，我们怎么过河呢？'
      ]
    }
},

methods:{
  showBtn(){
    this.dialogShow1=false
    this.liuDialogShow=true
  },
  showBtnLiu(){
    this.liuDialogShow=false
    this.dialogShow2=true
  },
  showBtn2(){
    this.buttonShow=true
  },
  s2Jump1(){
      this.$router.push({ path: '/levelTwo/s2' })
  }
},

components:{
  myDialog,
  liuDialog
}
}
</script>

<style>
.bgWrap2{
  width: 100%;
  height: 100%;
  background:#4aafcf;
}
</style>