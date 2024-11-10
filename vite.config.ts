import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        remote_app: "http://localhost:5001/assets/remoteEntry.js",
        remote_vue: "http://localhost:5002/remoteEntry.js",
      },
      shared: {
        react: { 
          singleton: true,
          requiredVersion: "^18.2.0"
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0"
        },
        vue: {
          singleton: true,
          eager: true,
          requiredVersion: "^3.4.21"
        }
      }
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5000,
    strictPort: true,
    cors: true
  }
});
