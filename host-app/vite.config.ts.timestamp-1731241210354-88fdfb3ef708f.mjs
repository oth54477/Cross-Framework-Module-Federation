// vite.config.ts
import { defineConfig } from "file:///Users/otaehun/Oh/test4/mf-project/host-app/.yarn/__virtual__/vite-virtual-c82573b6b5/0/cache/vite-npm-5.4.10-30d2e3a4e2-4db3b8ca3e.zip/node_modules/vite/dist/node/index.js";
import react from "file:///Users/otaehun/Oh/test4/mf-project/host-app/.yarn/__virtual__/@vitejs-plugin-react-virtual-a9c0655d9e/0/cache/@vitejs-plugin-react-npm-4.3.3-36a77676a2-1ad449cb79.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///Users/otaehun/Oh/test4/mf-project/host-app/.yarn/cache/@originjs-vite-plugin-federation-npm-1.3.6-aeeb65c2df-243c5e2cd7.zip/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        remote_app: "http://localhost:5001/assets/remoteEntry.js",
        remote_vue: {
          external: "http://localhost:5002/remoteEntry.js",
          format: "var",
          from: "webpack"
        }
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.2.0"
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0"
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
    port: 5e3,
    strictPort: true,
    cors: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb3RhZWh1bi9PaC90ZXN0NC9tZi1wcm9qZWN0L2hvc3QtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvb3RhZWh1bi9PaC90ZXN0NC9tZi1wcm9qZWN0L2hvc3QtYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9vdGFlaHVuL09oL3Rlc3Q0L21mLXByb2plY3QvaG9zdC1hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogJ2hvc3RfYXBwJyxcbiAgICAgIHJlbW90ZXM6IHtcbiAgICAgICAgcmVtb3RlX2FwcDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9hc3NldHMvcmVtb3RlRW50cnkuanMnLFxuICAgICAgICByZW1vdGVfdnVlOiB7XG4gICAgICAgICAgZXh0ZXJuYWw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDIvcmVtb3RlRW50cnkuanMnLFxuICAgICAgICAgIGZvcm1hdDogJ3ZhcicsXG4gICAgICAgICAgZnJvbTogJ3dlYnBhY2snXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaGFyZWQ6IHtcbiAgICAgICAgcmVhY3Q6IHsgXG4gICAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkVmVyc2lvbjogJ14xOC4yLjAnXG4gICAgICAgIH0sXG4gICAgICAgICdyZWFjdC1kb20nOiB7XG4gICAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkVmVyc2lvbjogJ14xOC4yLjAnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBidWlsZDoge1xuICAgIG1vZHVsZVByZWxvYWQ6IGZhbHNlLFxuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUwMDAsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBjb3JzOiB0cnVlXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVMsb0JBQW9CO0FBQ2hWLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWixZQUFZO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFDVixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLFdBQVc7QUFBQSxVQUNYLGlCQUFpQjtBQUFBLFFBQ25CO0FBQUEsUUFDQSxhQUFhO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxpQkFBaUI7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
