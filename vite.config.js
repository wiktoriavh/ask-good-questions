import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({}) => {
  return {
    // base: "/",
    build: {
      outDir: "build",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          // other: resolve(__dirname, "other/index.html"),
        },
      },
    },
  };
});
