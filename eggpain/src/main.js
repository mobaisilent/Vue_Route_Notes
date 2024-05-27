import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../src/router/index.js";

createApp(App).use(router).mount("#app");

// 由于main.js是管理全局的：所以需要将路由移出去
