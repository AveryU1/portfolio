import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      REACT_APP_SANITY_PROJECT_ID: env.REACT_APP_SANITY_PROJECT_ID,
      REACT_APP_SANITY_TOKEN: env.REACT_APP_SANITY_TOKEN,
    },
  };
});
