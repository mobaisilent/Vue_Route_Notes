<script setup>

</script>

<template>
  <nav>
    <a href="/">主页</a> |
    <a href="/chicken-egg">鸡蛋</a> |
    <!-- 前面两个a标签会导致页面的刷新 -->
    <router-link to="/">主页</router-link> |
    <router-link to="/chicken-egg">鸡蛋</router-link>
    <!-- 后面两个只会导致路由发生变化：：推荐 -->
  </nav>
  <router-view />
  <!-- 这里既可以使用单标签又可以 使用双标签 -->
</template>

<style scoped></style>
<!-- 备份该文件用来查看差异 -->
<!-- a标签会导致网络状态发生变化（网页刷新）而router-link就是局部刷新（路由） -->