<script setup>
import { RouterLink, RouterView } from 'vue-router'
import dataEggs from './data.json'
</script>

<template>
  <nav>
    <RouterLink to="/">首页</RouterLink> |
    <RouterLink v-for="dataEgg in dataEggs" :key="dataEgg.id" :to="`/egg/${dataEgg.type}`">
      {{ dataEgg.name }} |
    </RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
  .egg-active {
    color:red;
  }
</style>
