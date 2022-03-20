<template>
  <div class="choiceWrap">
    <div>
      <div class="quesTion">{{ question.title }}</div>
      <div class="answerList">
        <div
          v-for="(item, index) in question.answerList"
          :key="index"
          style="width: 100%; text-align: center"
        >
          <el-button
            class="btnList"
            type="success"
            plain
            @click="() => handleToClick(item.value)"
            >{{ item.label }}</el-button
          >
        </div>
      </div>
      <div style="text-align: center">
        <el-button type="warning" round @click="sendAnswer">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "choiceQuestion",
  props: ['question'],

  data () {
    return {
      value: ''
    }
  },
  methods: {
    sendAnswer () {
      if (this.value !== '') {
        this.$emit('sendAnswer', this.value)
      } else {
        this.$message({
          message: '您还没选择答案！',
          type: 'warning'
        })
      }


    },
    handleToClick (e) {
      this.value = e
    }
  }
}
</script>

<style>
.choiceWrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #000000;
  opacity: 0.86;
  z-index: 10;
}
.answerList {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.btnList {
  width: 300px;
  height: 35px;
  margin-bottom: 20px;
  text-align: center;
}

.quesTion {
  font-size: 17px;
  /* margin-top: 100px;
  margin-left: 180px; */
  margin-bottom: 20px;
  z-index: 100;
  color: #ffffff;
  /* text-align: left; */
}
.opTion {
  width: 300px;
  height: 35px;
  margin-bottom: 20px;
  margin-left: 330px;
  z-index: 100;
  text-align: centers;
  vertical-align: middle;
  font-size: 17px;
  font-weight: 600;
  opacity: 1;
}
.submitBtn {
  font-size: 17px;
  font-weight: 600;
}
</style>