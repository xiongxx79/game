<template>
  <div class="oneWrap">
    <router-link class="btn" to="/level/two">第二关</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 6666
    }
  },
  methods: {
    handleToJump: () => {

    }
  }
}
</script>

<style>
.oneWrap {
  width: 100%;
  height: 100%;
  background-image: url(http://pic.616pic.com/bg_w1180/00/04/07/F0QRahw2xP.jpg!/fh/300);
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