import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import Components from 'unplugin-vue-components/vite'
// import MotionResolver from 'motion-v/resolver'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
  
  build: {
    target: 'esnext', // hoặc 'esnext', 'modules', v.v.
  },
  server: {
    preview: {
      allowedHosts: ['tonytruong.id.vn', 'localhost', '127.0.0.1'],
    },
  },
  plugins: [vue(),
    Components({
      dts: true,
      resolvers: [
        // MotionResolver(),
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
