<template>
  <div class="bgWrap">
    <div class="bgOut"></div>
      <img src="../../assets/storeBg.png" class="bgIn" style="opacity:0.9">

        <el-button 
           type="success" 
           plain 
           class="backMapBtn0"
           @click="jumpMap">
           返回地图
        </el-button>

    <audio autoplay loop>
      <source src="../../assets/bgm2.mp3" type="audio/mp3" />
    </audio>

     <div class="choicePhoneWrap">
      <p class="phoneText">我的背景图</p>
      <img
        src="../../assets/choicePhone1.png"
        @click="phoneShow1"
        class="phoneCaseChoice"
      /><br />
      <img
        src="../../assets/choicePhone2.png"
        @click="phoneShow2"
        class="phoneCaseChoice"
      /><br />
      <img
        src="../../assets/choicePhone3.png"
        @click="phoneShow3"
        class="phoneCaseChoice"
      /><br />
      <img
        src="../../assets/choicePhone4.png"
        @click="phoneShow4"
        class="phoneCaseChoice"
      /><br />
      <img
        src="../../assets/choicePhone5.png"
        @click="phoneShow5"
        class="phoneCaseChoice"
      /><br />
      <img
        src="../../assets/choicePhone6.png"
        @click="phoneShow6"
        class="phoneCaseChoice"
      />
    </div>

    <div>
      <img
        src="../../assets/phone1.png"
        class="phoneCase"
        v-show="phone1Show"
      />
      <img
        src="../../assets/phone2.png"
        class="phoneCase"
        v-show="phone2Show"
      />
      <img
        src="../../assets/phone3.png"
        class="phoneCase"
        v-show="phone3Show"
      />
      <img
        src="../../assets/phone4.png"
        class="phoneCase"
        v-show="phone4Show"
      />
      <img
        src="../../assets/phone5.png"
        class="phoneCase"
        v-show="phone5Show"
      />
      <img
        src="../../assets/phone6.png"
        class="phoneCase"
        v-show="phone6Show"
      />
    </div>

    <div class="stickWrap">
      <p class="phoneText">我的贴纸</p>
      <div>
        <img src="../../assets/stick1.png" class="sticks" />
        <img src="../../assets/stick2.png" class="sticks" />
        <img src="../../assets/stick3.png" class="sticks" /><br/>
        <img src="../../assets/stick4.png" class="sticks" />
        <img src="../../assets/stick5.png" class="sticks" />
        <img src="../../assets/stick6.png" class="sticks" /><br/>
        <img src="../../assets/stick7.png" class="sticks" />
        <img src="../../assets/stick8.png" class="sticks" />
        <img src="../../assets/stick9.png" class="sticks" /><br/>
        <img src="../../assets/stick10.png" class="sticks" />
        <img src="../../assets/stick11.png" class="sticks" />
        <img src="../../assets/stick12.png" class="sticks" />
      </div>
      <DragResize1></DragResize1>
      <DragResize2></DragResize2>
      <DragResize3></DragResize3>
      <DragResize4></DragResize4>
      <DragResize5></DragResize5>
      <DragResize6></DragResize6>
      <DragResize7></DragResize7>
      <DragResize8></DragResize8>
      <DragResize9></DragResize9>
      <DragResize10></DragResize10>
      <DragResize11></DragResize11>
      <DragResize12></DragResize12>

      <br />
      <div></div>
      <div></div>
      <div></div>
    </div>

    <el-input
      v-model="input"
      placeholder="请输入创作者姓名"
      class="inputKuang"
    ></el-input>
  </div>
</template>

<script>
import DragResize1 from './dragResize1'
import DragResize2 from './dragResize2'
import DragResize3 from './dragResize3'
import DragResize4 from './dragResize4'
import DragResize5 from './dragResize5'
import DragResize6 from './dragResize6'
import DragResize7 from './dragResize7'
import DragResize8 from './dragResize8'
import DragResize9 from './dragResize9'
import DragResize10 from './dragResize10'
import DragResize11 from './dragResize11'
import DragResize12 from './dragResize12'

export default {
  name: "phoneStore",
  components: { 
    DragResize1,
    DragResize2,
    DragResize3,
    DragResize4,
    DragResize5,
    DragResize6,
    DragResize7,
    DragResize8,
    DragResize9,
    DragResize10,
    DragResize11,
    DragResize12
   },
  data () {
    return {
      phone1Show: true,
      phone2Show: false,
      phone3Show: false,
      phone4Show: false,
      phone5Show: false,
      phone6Show: false,
      input: ''
    }
  },

  methods: {
    jumpMap () {
      this.$router.push({ path: '/map' })
    },
    resize (newRect) {
      this.width = newRect.width
      this.height = newRect.height
      this.top = newRect.top
      this.left = newRect.left
    },
    phoneShow1 () {
      this.phone1Show = true
      this.phone2Show = this.phone3Show = this.phone4Show = this.phone5Show = this.phone6Show = false
    },
    phoneShow2 () {
      this.phone2Show = true
      this.phone1Show = this.phone3Show = this.phone4Show = this.phone5Show = this.phone6Show = false
    },
    phoneShow3 () {
      this.phone3Show = true
      this.phone2Show = this.phone1Show = this.phone4Show = this.phone5Show = this.phone6Show = false
    },
    phoneShow4 () {
      this.phone4Show = true
      this.phone2Show = this.phone3Show = this.phone1Show = this.phone5Show = this.phone6Show = false
    },
    phoneShow5 () {
      this.phone5Show = true
      this.phone2Show = this.phone3Show = this.phone4Show = this.phone1Show = this.phone6Show = false
    },
    phoneShow6 () {
      this.phone6Show = true
      this.phone2Show = this.phone3Show = this.phone4Show = this.phone5Show = this.phone1Show = false
    },
  },
}
</script>

<style>
.choicePhoneWrap {
  position: absolute;
  left: 200px;
  top: 40px;
}
.phoneText {
  color:#39619b;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.phoneCaseChoice {
  width: 100px;
  height: 50px;
  margin-top: 20px;
  cursor: pointer;
  left: 200px;
  top: 200px;
}
.phoneCase {
  width: 350px;
  height: 350px;
  right: 200px;
  top: 80px;
  position: absolute;
}
.inputKuang {
  position: absolute;
  right: 295px;
  bottom: 90px;
  width: 150px;
  height: 30px;
}
.sticks {
  width: 80px;
  height: 80px;
  margin-left: 20px;
  margin-top: 20px;
}
.stickWrap {
  position: absolute;
  left: 350px;
  top: 40px;
}
.backMapBtn0{
    position: absolute;
    top: 20px;
    right: 165px;
    animation: fadeIn 1s;
    font-weight: 600;
}
</style>