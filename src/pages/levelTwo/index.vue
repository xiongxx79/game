<template>
  <div class="twoWrap">
    <router-link class="btn" to="/level/one">第一关</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 99999
    }
  }
}
</script>

<style>
.twoWrap {
  width: 100%;
  height: 100%;
  background-image: url(http://pic.616pic.com/bg_w1180/00/04/71/ZfZhntq8Fc.jpg!/fw/1120);
  background-size: cover;
}
.btn {
  height: 20px;
  width: 100px;
  display: inline-block;
  font-size: 18px;
  margin: 10px;
}
</style>