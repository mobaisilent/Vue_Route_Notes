<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import dataEggs from './data.json'

const router = useRouter();

function forward() {
  router.go(1);
}

function backward() {
  router.go(-1);
}
// 获取router对象

</script>

<template>
  <nav>
    <RouterLink to="/">首页</RouterLink> |
    <RouterLink v-for="dataEgg in dataEggs" :key="dataEgg.id" :to="{ name: 'eggs', params: { eggType: dataEgg.type } }">
      {{ dataEgg.name }} |
    </RouterLink>
  </nav>
  <RouterView />
  <!-- <router-view></router-view> -->
  <button @click="forward">前进</button>
  <button @click="backward">后退</button>
  <!-- 创建对应两个函数即可 -->
</template>

<style scoped>
.egg-active {
  color: red;
}
</style>
