<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/"></RouterLink>
    <RouterLink to="/chicken-egg"></RouterLink>
    <RouterView />
  </div>
</template>
