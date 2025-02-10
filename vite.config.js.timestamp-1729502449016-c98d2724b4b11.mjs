// vite.config.js
import { createRequire } from "node:module";
import { defineConfig } from "file:///D:/htdocs8/nooknco-laravel/node_modules/vite/dist/node/index.js";
import path from "path";
import autoprefixer from "file:///D:/htdocs8/nooknco-laravel/node_modules/autoprefixer/lib/autoprefixer.js";
import laravel from "file:///D:/htdocs8/nooknco-laravel/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///D:/htdocs8/nooknco-laravel/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import ckeditor5 from "file:///D:/htdocs8/nooknco-laravel/node_modules/@ckeditor/vite-plugin-ckeditor5/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\htdocs8\\nooknco-laravel";
var __vite_injected_original_import_meta_url = "file:///D:/htdocs8/nooknco-laravel/vite.config.js";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var vite_config_default = defineConfig({
  // define: {
  // 	'process.env': process.env,
  // },
  resolve: {
    alias: {
      "@assets": path.resolve(__vite_injected_original_dirname, "resources/js/assets"),
      "@components": path.resolve(__vite_injected_original_dirname, "resources/js/components"),
      "@utils": path.resolve(__vite_injected_original_dirname, "resources/js/utils")
    }
  },
  plugins: [
    vue(),
    ckeditor5({
      theme: require2.resolve("@ckeditor/ckeditor5-theme-lark")
    }),
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: false
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: "last 4 versions"
        })
      ]
    }
  },
  build: {
    //manifest: true,
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxodGRvY3M4XFxcXG5vb2tuY28tbGFyYXZlbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcaHRkb2NzOFxcXFxub29rbmNvLWxhcmF2ZWxcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2h0ZG9jczgvbm9va25jby1sYXJhdmVsL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoIGltcG9ydC5tZXRhLnVybCApXG5cbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBja2VkaXRvcjUgZnJvbSAnQGNrZWRpdG9yL3ZpdGUtcGx1Z2luLWNrZWRpdG9yNSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICAvLyBkZWZpbmU6IHtcblx0Ly8gXHQncHJvY2Vzcy5lbnYnOiBwcm9jZXNzLmVudixcblx0Ly8gfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdyZXNvdXJjZXMvanMvYXNzZXRzJyksXG4gICAgICAgICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncmVzb3VyY2VzL2pzL2NvbXBvbmVudHMnKSxcbiAgICAgICAgICAgICdAdXRpbHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncmVzb3VyY2VzL2pzL3V0aWxzJyksXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdnVlKCksXG4gICAgICAgIGNrZWRpdG9yNSh7IFxuICAgICAgICAgICAgdGhlbWU6IHJlcXVpcmUucmVzb2x2ZSgnQGNrZWRpdG9yL2NrZWRpdG9yNS10aGVtZS1sYXJrJykgXG4gICAgICAgIH0pLFxuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbJ3Jlc291cmNlcy9jc3MvYXBwLmNzcycsICdyZXNvdXJjZXMvanMvYXBwLmpzJ10sXG4gICAgICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBjc3M6IHtcbiAgICAgICAgcG9zdGNzczoge1xuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgIGF1dG9wcmVmaXhlcih7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiAnbGFzdCA0IHZlcnNpb25zJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIC8vbWFuaWZlc3Q6IHRydWUsXG4gICAgfSBcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxTQUFTLHFCQUFxQjtBQUNwUyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFDakIsT0FBTyxrQkFBa0I7QUFJekIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLGVBQWU7QUFUdEIsSUFBTSxtQ0FBbUM7QUFBd0gsSUFBTSwyQ0FBMkM7QUFLbE4sSUFBTUEsV0FBVSxjQUFlLHdDQUFnQjtBQU0vQyxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUl4QixTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUN4RCxlQUFlLEtBQUssUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxNQUNoRSxVQUFVLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxJQUMxRDtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxNQUNOLE9BQU9BLFNBQVEsUUFBUSxnQ0FBZ0M7QUFBQSxJQUMzRCxDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDSixPQUFPLENBQUMseUJBQXlCLHFCQUFxQjtBQUFBLE1BQ3RELFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDTCxhQUFhO0FBQUEsVUFDVCxzQkFBc0I7QUFBQSxRQUMxQixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxFQUVQO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFsicmVxdWlyZSJdCn0K
