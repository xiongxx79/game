<template>
  <div>
    <VueDragResize :w="w" :h="h" :z="1" :x="x" :y="y" v-on:resizing="resize">
      <img
        src="../../../assets/useOne.png"
        :style="{
          width: w + 'px',
          height: h + 'px',
          left: x + 'px',
          right: y + 'px',
        }"
      />
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'

export default {
  name:'DragResize06',
  components: { VueDragResize },
  data () {
    return {
      w: 120,
      h: 40,
      x: 300,
      y: 400
    }
  },
  methods: {
    resize (newRect) {
      this.w = newRect.width
      this.h = newRect.height
      this.x = newRect.top
      this.y = newRect.left
    },
  }
}
</script>

<style>
</style>