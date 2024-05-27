<script>
import dataEggs from "../data.json";
export default {
  computed: {
    eggType() {
      return this.$route.params.eggType;
    },
    dataEgg() {
      return dataEggs.find(
        dataEgg => dataEgg.type === this.eggType,
      )
    },
  }
}
// 因为App.uve使用了 选项式API所以这里也使用选项是指API：否则报错
</script>

<template>
  <!-- {{ dataEgg }} -->
  <!-- ok实现了动态显示内容 -->
  <h1>{{ dataEgg.name }}</h1>
  <p>{{ dataEgg.description }}</p>
  <p>{{ dataEgg.flavour }}</p>
  <img :src="`../../src/assets/images/${dataEgg.image}`">
  <!-- 动态解析数据：实现动态页面（局部） -->
</template>

<style scoped>
img {
  width: 150px;
  height: 150px;
}
</style>