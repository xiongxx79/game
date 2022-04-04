<template>
<div>
    <img src="../assets/operateBg2.png" class="operateBg">
    <img src="../assets/mask1.png" class="mask1">
    <img src="../assets/mask2.png" class="mask2">
    <img src="../assets/mask3.png" class="mask3" @click="dialogSelectVisible = true">
    <img src="../assets/mask4.png" :class="DigiHealth" @click="openFix">

    <el-button 
      class="backBtn" 
      type="info" 
      icon="el-icon-back" 
      circle size="mini" 
      @click="toDesk">
    </el-button>

    <el-dialog 
    title="请选择应用及通知状态" 
    :visible.sync="dialogSelectVisible" 
    style="top:100px" 
    center>

          <el-select v-model="value" placeholder="请选择应用">
            <el-option 
            v-for="item in options2" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
            </el-option>
          </el-select>

          <el-switch
          v-model="value2"
          active-text="允许通知"
          style="margin-left:90px">
          </el-switch>

          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="checkSta">确 定</el-button>
          </span>
  </el-dialog>

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
        flag:1,
        options2: [{
          value: 'schedule',
          label: '日程表'
        }, {
          value: 'game',
          label: '游戏'
        }, {
          value: 'setting',
          label: '设置'
        },
        {
          value: 'friends',
          label: '交友圈'
        }],
        value:'',
        value2:true,
        dialogSelectVisible:false,
    }
  },
  methods:{
    openFix() {
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
    },
    checkSta(){
      if(this.value=="friends" && this.value2==false){
          this.$message({
          message: '设置成功！',
          type: 'success'
        });
          this.dialogSelectVisible=false,
          this.$emit('banNoteSuccess',true)
    } else{
          this.$message({
          message: 'APP或通知状态错误，请重新选择！',
          type: 'error'
          });
    }  
  }
}
}
</script>

<style>
.operateBg{
  width: 212px;
  height: 440px;
  left: 533px;
  bottom: 62px;
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
  width: 202px;
  height: 25px;
  left: 539px;
  bottom: 185px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
}
.mask3:hover{
  width: 202px;
  height: 25px;
  left: 539px;
  bottom: 185px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
  filter: brightness(10%);
}
.mask4{
  width: 200px;
  height: 26px;
  left: 539px;
  bottom: 107px;
  position: absolute;
  opacity: 0.6;
  z-index: 100;
  cursor: pointer;
  animation: fadeIn 0.6s ease-in 3;
}
.maskChange4{
  width: 200px;
  height: 26px;
  left: 539px;
  bottom: 107px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
}
.maskChange4:hover{
  width: 200px;
  height: 26px;
  left: 539px;
  bottom: 107px;
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
  z-index: 1;
  animation: fadeIn 2s;
}

</style>