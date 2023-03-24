import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from '@vitejs/plugin-legacy'

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
console.log(defineConfig,'555')
// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css:{
    // 动态设置全局样式
    preprocessorOptions:{
      less:{
        charset:false,
        additionalData:`@import "./src/css/global.less";`
      }
    }
  }
});
