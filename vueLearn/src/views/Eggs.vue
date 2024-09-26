<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import dataEggs from '../data.json';

const route = useRoute();
const eggType = computed(() => route.params.eggType);
const dataEgg = computed(() => dataEggs.find(dataEgg => dataEgg.type === eggType.value));
</script>

<template>
  <div v-if="!dataEgg">
    <h1>查无此蛋</h1>
  </div>
  <div v-else>
    <h1>{{ dataEgg.name }}</h1>
    <p>{{ dataEgg.description }}</p>
    <p>{{ dataEgg.flavour }}</p>
    <img :src="`../../src/assets/images/${dataEgg.image}`" :alt="dataEgg.name" />
  </div>
</template>

<style scoped>
img {
  width: 150px;
  height: 150px;
}
</style>