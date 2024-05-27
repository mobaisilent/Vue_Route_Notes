<script>
import dataEggs from "./data.json";
export default {
  data() {
    return {
      dataEggs,
    }
  }
}
// 选项式：注意将上面的setup删了，否则报错
</script>

<template>
  <nav>
    <router-link to="/">主页</router-link> |
    <router-link v-for="dataEgg in dataEggs" :key="dataEgg.id" :to="`/eggs/${dataEgg.type}`">
      {{ dataEgg.name }}|
    </router-link>
    <!-- 注意to后面的路径接的是 飘号（模板字面量） 模板字面量是一种允许嵌入表达式的字符串字面量 -->

  </nav>
  <router-view />
</template>

<style scoped></style>