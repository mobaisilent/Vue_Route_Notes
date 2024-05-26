import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    // alias: "/home",
    // http://localhost:5173/#/home可以访问主页：下面是多个别名
    alias: ["/home", "/index"],  
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/content",
    component: () => import("@/views/content.vue"),
  },
  {
    path: "/user/:id/name/:name?",
    component: () => import("@/views/user.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
// project4的作用主要是定义别名，定义路由名称，编程式导航
