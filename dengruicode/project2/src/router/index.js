import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
  },
  // 这里是设置根路径路由
  {
    path: "/content",
    component: () => import("../views/content.vue"),
  },
  // 这里是定义内容组件的路由
];
// 创建路由数组：创建路由规则

// 有了上面的路由规则：下面就是创建路由器
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});
// 注意这两种浏览器路由模式 一个是带#号的一个是不带#号的:注意选择路由模式时后面的括号（是个函数）

export default router;
// 将路由器导出
