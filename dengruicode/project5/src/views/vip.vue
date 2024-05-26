<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <Header />

  <!-- 因为vip下有子 所以需创建一个router-view标签 -->
  <router-view />

  <Footer />
  <!-- 直接导入两个组件使用 -->
  <!-- 效果实现：注意大小写：vue应该驼峰命名或者连连字符命名：：而且header恩后footer是html的内置标签：所以不生效，改为大写就行了 -->
</template>

<style scoped></style>

<!-- 关系结构理一下：外层vip.vue 内层vip文件下的三个子组件：共享Header和Footer组件 -->
