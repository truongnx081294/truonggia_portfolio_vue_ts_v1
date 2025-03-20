import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()
    Components({
      dts: true,
      resolvers: [
        MotionResolver()
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
