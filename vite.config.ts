import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";

export default defineConfig({
  // base: "/moko-vue-elementplus-admin",
  plugins: [
    vue(),
    vueJsx(),
    PkgConfig(),
    OptimizationPersist(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle: "sass",
      })],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
    viteMockServe({
      // default
      mockPath: "mock",
      prodEnabled: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use \"@/styles/theme.scss\" as *;",
      },
    },
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${path.resolve(__dirname, "./src")}/` },
    ],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    proxy: {
      "/tm": {
        target: "http://localhost:98",
        changeOrigin: true,
        rewrite: (url) => url.replace(/^\/tm/, ""),
      },
    },
  },
});
