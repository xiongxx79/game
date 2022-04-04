<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
    <div class="lockBg"></div>
    <img src="../../assets/lockBgPhone.png" class="bgIn">
    <p class="levelTipS4">匹配网络成瘾的危害与释义得到密码</p>

    <div class="explains">
        <p class="explain">04 过度沉迷网络中的虚拟角色，迷失真实自我，逃避现实挫折</p>
        <p class="explain">5g 食欲不振、体重下降、睡眠减少、头昏眼花、情绪低落、精神难以集中；免疫力下降、引发心血管疾病甚至猝死；情感障碍、抑郁、焦虑</p>
        <p class="explain">1a 因迷恋网络而无心学习，学习成绩下降，考试不及格，甚至厌学、退学</p>
        <p class="explain">34 对真实生活中的人和事缺少兴趣，情感淡漠，与亲人朋友之间交往减少，甚至将自己封闭起来</p>
        <p class="explain">27 在网络空间中放纵欲望，导致网上违规、违法行为，或是出现暴力攻击行为</p>
    </div>

    <div class="definitions">
        <div class="definition"></div>
        <div class="definition"></div>
        <div class="definition"></div>
        <div class="definition"></div>
        <div class="definition"></div>
    </div>

    <DragResize01 style="z-index:10;cursor:move;"></DragResize01>
    <DragResize02 style="z-index:10;cursor:move;"></DragResize02>
    <DragResize03 style="z-index:10;cursor:move;"></DragResize03>
    <DragResize04 style="z-index:10;cursor:move;"></DragResize04>
    <DragResize05 style="z-index:10;cursor:move;"></DragResize05>

    <img src="../../assets/lockLo.png" class="lockLo">
    <input v-model="input" placeholder="请输入密码" class="passWord" @keydown.enter="checkPassword">
    <p class="passTip">按Enter键开锁</p>

</div>
</template>

<script>
import DragResize01 from './dragResize/dragResize01'
import DragResize02 from './dragResize/dragResize02'
import DragResize03 from './dragResize/dragResize03'
import DragResize04 from './dragResize/dragResize04'
import DragResize05 from './dragResize/dragResize05'

export default {
name:"levelOneS4",

data(){
    return{
        input: '',
    }
},

methods:{
    checkPassword(){
        if(this.input=='0e04335g9b1a55346827'){
        this.$message({
          message: '密码正确！',
          type: 'success'
        })
           this.$router.push({ path: '/levelone/s5' })
        }else{
        this.$message({
          message: '密码错误！',
          type: 'error'
        })
    }
    },
},

components:{
    DragResize01,
    DragResize02,
    DragResize03,
    DragResize04,
    DragResize05
}
}
</script>

<style>
.lockBg{
left: 12%;
  top:2%;
  width:76%;
  height:96%;
  background:#d5272d;
  opacity: 0.8;
  position: absolute;
  z-index: 1;
}
.levelTipS4{
  width: 310px;
  height: 20px;
  background: #000000;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.7;
  padding: 20px;
  right: 450px;
  top:50px;
  position: absolute;
  animation: wobble 2s;
  text-align: center;
  z-index: 10;
}
.lockLo{
    width: 50px;
    height: 50px;
    bottom: 50px;
    left: 450px;
    position: absolute;
    z-index: 10;
}
.passWord{
    width: 300px;
    height: 30px;
    bottom: 55px;
    left: 510px;
    position: absolute;
    z-index: 10;
    background: none;
    border-color:#000000;
    border-radius: 5px;
    color:#000000;
}
.passTip{
    font-size: 16px;
    color:#000000;
    margin-top: 10px;
    position: absolute;
    bottom: 65px;
    right:350px;
    z-index: 10;
}
.passBtn{
    bottom: 55px;
    left: 560px;
    position: absolute;
    z-index: 10;
}
.explains{
    width: 450px;
    height: 300px;
    position: absolute;
    right: 250px;
    top: 150px;
    z-index:10 ;
}
.explain{
    font-size: 16px;
    color:#3f4041;
    margin-top: 10px;
}
.definitions{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 450px;
    top: 130px;
    z-index:10 ;
}
.definition{
    width: 100px;
    height: 20px;
    border:solid #3f4041 2px;
    margin-top: 30px;
    border-radius: 10px;
}
</style>