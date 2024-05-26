<script setup>
import { useRouter } from 'vue-router';
// 导入api

const router = useRouter();
// 创建变量：对象

const goTo1 = () => {
  router.push("/content?id=100&title=邓瑞编程");
}
const goTo2 = () => {
  router.push({ name: 'member', params: { id: 200, name: 'vue3' } });
}
</script>

<template>
  首页 - mobaisilent.top
  <br>
  <router-link to="/content?id=100&title=邓瑞编程">查询字符串传参</router-link><br>
  <router-link to="/user/007/name/邓瑞">路径传参</router-link><br>
  <!-- 页面效果看起来与a标签无异 -->
  <router-link :to="{ path: '/content', query: { id: 200, title: 'vue3' } }">查询字符串传参 - 动态属性绑定</router-link><br>
  <!-- <router-link :to="{ path: '/user', params: { id: 200, name: 'vue3' } }">查询字符串传参 - 动态属性绑定</router-link> -->
  <!-- 这段无效果 是一个错误的写法:下面是正确的写法  -->
  <router-link :to="{ name: 'member', params: { id: 200, name: 'vue3' } }">查询字符串传参 - 动态属性绑定</router-link><br>
  <!-- 修改user那个路由的name信息为member -->

  <button @click="goTo1()">编程式导航1</button><br>
  <button @click="goTo2()">编程式导航2</button>
</template>


<style scoped></style>