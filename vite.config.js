import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/var";
          @import "./src/styles/reset";
          @import "./src/styles/mixin";
          @import "./src/styles/common";
          @import "./src/styles/media";
        `,
      },
    },
  },
});
