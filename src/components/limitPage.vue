<template>
<div>
  <img src="../assets/limitBg.png" class="limitBg">
  <img src="../assets/mask3.png" class="maskOne">
  <img src="../assets/mask2.png" class="maskTwo" @click="dialogSelectVisible = true">
  <img src="../assets/mask2.png" class="maskThree">

  <el-dialog title="请选择要进行时间限制的应用及限制时间" :visible.sync="dialogSelectVisible" style="top:100px" center>

  <el-select v-model="value" placeholder="请选择应用">
    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>

  <el-radio-group v-model="radio">
    <el-radio :label="1" style="margin-left:30px">10分钟</el-radio>
    <el-radio :label="2">30分钟</el-radio>
    <el-radio :label="3">50分钟</el-radio>
  </el-radio-group>

  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="checkTime">确 定</el-button>
  </span>
  </el-dialog>

  <el-button class="backBtn" type="info" icon="el-icon-back" circle size="mini" @click="toSetting"></el-button>

</div>
</template>

<script>
export default {
name:'limitPage',

data(){
    return{
          options1: [{
          value: 'schedule',
          label: '日程表'
        }, {
          value: 'game',
          label: '游戏'
        }, {
          value: 'setting',
          label: '设置'
        }],
        value:'',
        radio:'',
        dialogSelectVisible:false,
    }
},
methods:{
  checkTime(){
    if( this.value=='game' && this.radio==2){
          this.$message({
          message: '设置成功！',
          type: 'success'
        });
          this.dialogSelectVisible=false,
          this.$emit('showSuccess',true)
    } else{
          this.$message({
          message: 'APP或限制时间错误，请重新选择！',
          type: 'error'
          });
    }
},
  toSetting(){
    this.$emit('backSetting',true)
  }
}
}
</script>

<style>
.limitBg{
  width: 223px;
  height: 455px;
  left: 528px;
  bottom: 57px;
  position: absolute;
  z-index: 1;
  animation: fadeIn 0.5s;
}
.maskOne{
  width: 207px;
  height: 39px;
  left: 537px;
  bottom: 231px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
} 
.maskTwo{
  width: 205px;
  height: 38px;
  left: 537px;
  bottom: 193px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
} 
.maskOne:hover{
  width: 207px;
  height: 39px;
  left: 537px;
  bottom: 231px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
  filter: brightness(10%);
} 
.maskTwo:hover{
  width: 205px;
  height: 38px;
  left: 537px;
  bottom: 193px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
  filter: brightness(10%);
} 
.maskThree{
  width: 205px;
  height: 112px;
  left: 537px;
  bottom: 80px;
  position: absolute;
  opacity: 0.1;
  z-index: 100;
  cursor: pointer;
}

</style>