import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    alias: ["/home", "/index"],
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/content",
    component: () => import("@/views/content.vue"),
  },
  {
    path: "/user/:id/name/:name?",
    name: "member",
    component: () => import("@/views/user.vue"),
  },
  {
    path: "/vip",
    component: () => import("@/views/vip.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/vip/default.vue"),
      }, // 后面接空可以表示默认路由
      {
        path: "order",
        component: () => import("@/views/vip/order.vue"),
      },
      {
        path: "info",
        component: () => import("@/views/vip/info.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
// project5的作用主要嵌套路由结合共享组件
