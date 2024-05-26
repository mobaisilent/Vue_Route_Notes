import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
// 导入路由器
// createApp(App).use(router).mount("#app");
// project7的主要功能就是实现 前置守卫：global front guard

const app = createApp(App); // 这个App 与App.vue之间相互对应：所以大写
app.use(router);

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log("to:", to);
  console.log("form:", from);
  // 打印查看这两个信息：随便点击几个按钮就知道这是干什么的了

  // next();
  // 下面设置拦截
  if (to.name == "member") {
    next(false);
  } else {
    next();
  }
  // 编程以及实际演示可见拦截效果
});

app.mount("#app");
