<template>
<div>
    <img src="../assets/operateBg2.png" class="operateBg">
    <img src="../assets/mask1.png" class="mask1">
    <img src="../assets/mask2.png" class="mask2">
    <img src="../assets/mask3.png" class="mask3">
    <img src="../assets/mask4.png" :class="DigiHealth" @click="open">

    <el-button class="backBtn" type="info" icon="el-icon-back" circle size="mini" @click="toDesk"></el-button>
</div>

</template>

<script>
export default {
name: 'settingPage',

  data(){
    return{
        DigiHealth:"mask4",
        bshow1:false,
        bshow2:false,
        flag:1
    }
  },
  methods:{
    open() {
        if(this.flag==1){
        this.$alert('(* ￣︿￣)','这个功能好像坏了。',  {
          showClose:false,
          confirmButtonText: '修复',
          callback: () => {
              this.$message({
              type: 'success',
              message: '修复成功！',
            });
        this.DigiHealth="maskChange4"
        this.$emit('showTip', true)
          }
        });
        this.flag=2
      }
      else {
    this.$emit('showLimit',true)
      }
    },
    toDesk(){
      this.$emit('toDesk',false)
    }
  }
}
</script>

<style>
.operateBg{
  width: 223px;
  height: 454px;
  left: 528px;
  bottom: 57px;
  position: absolute;
  z-index: 1;
  animation: zoomIn 0.5s;
}
.mask1{
  width: 210px;
  height: 100px;
  left: 534px;
  bottom: 235px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
}
.mask2{
  width: 210px;
  height: 50px;
  left: 534px;
  bottom: 130px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
}
.mask3{
  width: 211px;
  height: 27px;
  left: 534px;
  bottom: 183px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
}
.mask3:hover{
  width: 211px;
  height: 27px;
  left: 534px;
  bottom: 183px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
  filter: brightness(10%);
}
.mask4{
  width: 210px;
  height: 27px;
  left: 534px;
  bottom: 103px;
  position: absolute;
  opacity: 0.6;
  z-index: 100;
  cursor: pointer;
  animation: fadeIn 0.6s ease-in 3;
}
.maskChange4{
  width: 210px;
  height: 27px;
  left: 534px;
  bottom: 103px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
}
.maskChange4:hover{
  width: 210px;
  height: 27px;
  left: 534px;
  bottom: 103px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
  filter: brightness(10%);
}
.backBtn{
  right: 630px;
  bottom: 65px;
  position:absolute;
  z-index: 1000;
  animation: fadeIn 2s;
}

</style>