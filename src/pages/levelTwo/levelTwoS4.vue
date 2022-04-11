<template>
  <div class="bgWrap2">
    <div class="bgOut"></div>
    <div class="lockBg"></div>
    <img src="../../assets/lockBgPhone.png" class="bgIn">
    <p class="levelTipS4">匹配合理使用数字设备的方法得到密码</p>

    <audio autoplay loop>
      <source src="../../assets/lockMusic.mp3" type="audio/mp3" />
    </audio>

    <audio id="wrongAudio">
      <source src="../../assets/wrongAudio.mp3" type="audio/mp3" />
    </audio>

    <audio id="correctAudio">
      <source src="../../assets/correctAudio.mp3" type="audio/mp3" />
    </audio>

    <div class="explains2">
        <p class="explain2">90 使用帮助我学习的软件，寻找网络上优质的学习资源</p>
        <p class="explain2">a7 对某些应用程序时设置限制使用时间，将消息提醒设置为静音或关闭部分消息提醒</p>
        <p class="explain2">n5 平衡数字生活与家庭活动、学校活动、学习、爱好、人际交往等活动之间的关系，合理安排各项活动的时间</p>
        <p class="explain2">71 放下数字设备，关注和尊重周围的人，考虑他们的感受</p>
        <p class="explain2">25 取消关注那些带给我负面情绪的人，删除让我感到不舒服的软件</p>
    </div>

    <div class="definitions">
        <div class="definition"></div>
        <div class="definition"></div>
        <div class="definition"></div>
        <div class="definition"></div>
        <div class="definition"></div>
    </div>

    <DragResize06 style="z-index:10;cursor:move;"></DragResize06>
    <DragResize07 style="z-index:10;cursor:move;"></DragResize07>
    <DragResize08 style="z-index:10;cursor:move;"></DragResize08>
    <DragResize09 style="z-index:10;cursor:move;"></DragResize09>
    <DragResize10 style="z-index:10;cursor:move;"></DragResize10>

    <img src="../../assets/lockLo.png" class="lockLo">
    <input v-model="input" placeholder="请输入密码" class="passWord" @keydown.enter="checkPassword">
    <p class="passTip">按Enter键开锁</p>

</div>
</template>

<script>
import DragResize06 from './dragResize/dragResize06'
import DragResize07 from './dragResize/dragResize07'
import DragResize08 from './dragResize/dragResize08'
import DragResize09 from './dragResize/dragResize09'
import DragResize10 from './dragResize/dragResize10'

export default {
name:"levelTwoS4",

data(){
    return{
        input: '',
    }
},

methods:{
    checkPassword(){
        if(this.input=='109079a72kn508712125'){
        this.$message({
          message: '密码正确！',
          type: 'success'
        })
        document.getElementById('correctAudio').play()
        this.$router.push({ path: '/leveltwo/s5' })
        }else{
        this.$message({
          message: '密码错误！',
          type: 'error'
        })
        document.getElementById('wrongAudio').play()
    }
    },
},

components:{
    DragResize06,
    DragResize07,
    DragResize08,
    DragResize09,
    DragResize10
}
}
</script>


<style>
.explains2{
    width: 450px;
    height: 300px;
    position: absolute;
    right: 250px;
    top: 140px;
    z-index:10 ;
}
.explain2{
    font-size: 16px;
    color:#3f4041;
    margin-top: 20px;
}
</style>