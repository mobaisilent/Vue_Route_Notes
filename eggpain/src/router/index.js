import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChickenEgg from "../views/ChickenEgg.vue";
import Eggs from "../views/Eggs.vue";

const router = createRouter({
  history: createWebHistory(), //注意合理是个函数：否则报错页面无法显示
  routes: [
    { path: "/", component: Home },
    { path: "/chicken-egg", component: ChickenEgg },
    { path: "/eggs/:eggType", component: Eggs },
  ],
});

export default router;

// 要实现懒加载是要修改这里对于component
