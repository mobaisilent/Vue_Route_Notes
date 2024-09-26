import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import ChickenEgg from './views/ChickenEgg.vue'

const router = createRouter(
  {
    history:createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/chicken-egg', component: ChickenEgg },
    ]
    // 创建路由:注意创建路由还是不行，需要创建历史模式
  }
)


const app = createApp(App)

app.use(router)

app.mount('#app')
// ceateApp(App).use(router).mount('#app')
// 一键创建实例并且挂载
