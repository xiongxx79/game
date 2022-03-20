<template>
  <div class="choiceWrap">
      <div class="quesTion">{{quesHead}}</div>

      <div style="margin-top:60px">
          <el-button type="success" plain class="opTion" value="A" v-model="value">{{answerOne}}</el-button><br/>
          <el-button type="success" plain class="opTion" value="B" v-mode="value">{{answerTwo}}</el-button><br/>
          <el-button type="success" plain class="opTion" value="C" v-model="value">{{answerThree}}</el-button><br/>
          <el-button type="success" plain class="opTion" value="D" v-model="value">{{answerFour}}</el-button>
      </div>

      <el-button type="warning" round class="submitBtn" @click="sendAnswer">确定</el-button>

  </div>
</template>

<script>
export default {
name:"choiceQuestion",
props: ['quesList'],

data(){
    return{
        quesHead:this.quesList[0],
        answerOne:this.quesList[1],
        answerTwo:this.quesList[2],
        answerThree:this.quesList[3],
        answerFour:this.quesList[4],
        value:''
}
},
methods:{
    sendAnswer(){
        console.log(this.value);
        this.$emit('anSwer',this.value)
    }
}
}
</script>

<style>
.choiceWrap{
  left: 12%;
  top:2%;
  width:76%;
  height:96%;
  position: absolute;
  background: #000000;
  opacity:0.86;
  z-index: 10;
}
.quesTion{
    font-size: 17px;
    margin-top: 100px;
    margin-left: 180px;
    margin-bottom: 20px;
    width: 720px;
    z-index: 100;
    color: #ffffff;
    text-align: left;
}
.opTion{
    width:300px;
    height:35px;
    margin-bottom: 20px;
    margin-left: 330px;
    z-index: 100;
    text-align: centers;
    vertical-align:middle;
    font-size: 17px;
    font-weight: 600;
    opacity:1;
}
.submitBtn{
    margin-left:440px;
    margin-top:10px;
    font-size:17spx;
    font-weight:600;
}
</style>