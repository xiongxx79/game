<template>
<div class="bgWrap">
    <div class="bgOut"></div>
    <div class="choicePhoneWrap">
        <p class="phoneText">我的背景图</p>
        <img src="../../assets/choicePhone1.png" @click="phoneShow1"  class="phoneCaseChoice"><br/>
        <img src="../../assets/choicePhone2.png" @click="phoneShow2"  class="phoneCaseChoice"><br/>
        <img src="../../assets/choicePhone3.png" @click="phoneShow3"  class="phoneCaseChoice"><br/>
        <img src="../../assets/choicePhone4.png" @click="phoneShow4"  class="phoneCaseChoice"><br/>
        <img src="../../assets/choicePhone5.png" @click="phoneShow5"  class="phoneCaseChoice"><br/>
        <img src="../../assets/choicePhone6.png" @click="phoneShow6"  class="phoneCaseChoice">
    </div>

    <div>
        <img src="../../assets/phone1.png" class="phoneCase" v-show="phone1Show">
        <img src="../../assets/phone2.png" class="phoneCase" v-show="phone2Show">
        <img src="../../assets/phone3.png" class="phoneCase" v-show="phone3Show">
        <img src="../../assets/phone4.png" class="phoneCase" v-show="phone4Show">
        <img src="../../assets/phone5.png" class="phoneCase" v-show="phone5Show">
        <img src="../../assets/phone6.png" class="phoneCase" v-show="phone6Show">
    </div>

    <div class="stickWrap">
        <p class="phoneText">我的贴纸</p>       
        <div>
            <img src="../../assets/stick1.png" class="sticks">
            <img src="../../assets/stick2.png" class="sticks">
            <img src="../../assets/stick3.png" class="sticks">
        </div><br/>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <el-input v-model="input" placeholder="请输入创作者姓名" class="inputKuang"></el-input>

</div>
</template>

<script>
export default {
name:"phoneStore",

data(){
    return{
        phone1Show:true,
        phone2Show:false,
        phone3Show:false,
        phone4Show:false,
        phone5Show:false,
        phone6Show:false,
        input:''
    }
},

methods:{
    phoneShow1(){
        this.phone1Show=true
        this.phone2Show=this.phone3Show=this.phone4Show=this.phone5Show=this.phone6Show=false
    },
    phoneShow2(){
        this.phone2Show=true
        this.phone1Show=this.phone3Show=this.phone4Show=this.phone5Show=this.phone6Show=false
    },
    phoneShow3(){
        this.phone3Show=true
        this.phone2Show=this.phone1Show=this.phone4Show=this.phone5Show=this.phone6Show=false
    },
    phoneShow4(){
        this.phone4Show=true
        this.phone2Show=this.phone3Show=this.phone1Show=this.phone5Show=this.phone6Show=false
    },
    phoneShow5(){
        this.phone5Show=true
        this.phone2Show=this.phone3Show=this.phone4Show=this.phone1Show=this.phone6Show=false
    },
    phoneShow6(){
        this.phone6Show=true
        this.phone2Show=this.phone3Show=this.phone4Show=this.phone5Show=this.phone1Show=false
    },
},

components:{

}
}
</script>

<style>
.choicePhoneWrap{
    position: absolute;
    left: 200px;
    top: 40px;
}
.phoneText{
    color: black;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
}
.phoneCaseChoice{
    width: 100px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    left: 200px;
    top:200px;
}
.phoneCase{
    width: 350px;
    height: 350px;
    right: 200px;
    top: 80px;
    position: absolute;
}
.inputKuang{
    position: absolute;
    right: 295px;
    bottom: 90px;
    width: 150px;
    height: 30px;
}
.sticks{
    width: 80px;
    height: 80px;
    margin-left: 20px;
    margin-top: 20px;
}
.stickWrap{
    position: absolute;
    left: 350px;
    top: 40px;
}

</style>