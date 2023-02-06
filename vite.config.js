import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 服务器选项配置https://cn.vitejs.dev/config/server-options.html#server-proxy
  server: {
    // 代理配置
    proxy: {
      "/nxf": {
        target: "http://127.0.0.1:3000",
        rewrite: (path) => path.replace(/^\/nxf/, ""),
      },
      "/dq": {
        target: "http://dangqun-test.boe.com.cn/",
        changeOrigin: true, //域名
        rewrite: (path) => path.replace(/^\/dq/, ""),
      },
    },
  },
})
