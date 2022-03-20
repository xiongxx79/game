<template>
   <div class="bgWrap">
    <div class="bgOut"></div>
        <!-- <img src="../../assets/clueFindOne.jpg" class="bgIn"> -->
  <judgeQuestion v-show="judgeShow1" :judgeList="judgeList1" @anSwer="getAnswer"></judgeQuestion>
</div>
</template>

<script>
import judgeQuestion from "../../components/judgeQuestion"

export default {
  name: 'levelOneS3',
  data(){
      return{
          judgeShow1:true,
          judgeList1:[
              '1.刘凯和朋友们一起连续观看了五个小时的视频，他累了，想回家，但他的朋友们希望他留下来继续看。他应该（）。',
              'A. 停下回家',
              'B. 再多看一会儿，这能有什么危害'

          ]
      }
  },
  methods:{

  },
  components:{
      judgeQuestion
  }
}
</script>

<style>

</style>