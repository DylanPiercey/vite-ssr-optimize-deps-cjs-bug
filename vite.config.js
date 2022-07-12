import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    optimizeDeps: {
      disabled: false,
      include: ["test-package/entry.mjs"],
      noExternal: ["test-package/entry.mjs"]
    }
  }
});
