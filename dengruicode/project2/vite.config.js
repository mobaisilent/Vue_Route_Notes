import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
// 先导入 path api用来设置路径别名

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      // 好像本来就是配置好的
      "@": path.resolve(__dirname, "src"),
      // 就是@符号代表src目录
      // 然后可以去修改router下index.js那两条路径规则的路径了
    },
  },
});
