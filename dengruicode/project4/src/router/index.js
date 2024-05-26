import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
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
  // 如果name是不必须的就使用问号
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
// project3的主要功能是实现使用查询字符串或路径传递参数
// 例如：http://localhost:5173/#/content?id=100&title=%E9%82%93%E7%91%9E%E7%BC%96%E7%A8%8B

// 当访问上面这个俩姐的时候内容页面显示的内容是：
// 内容页 - 墨白
// id:100
// title:邓瑞编程
