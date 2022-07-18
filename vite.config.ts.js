// vite.config.ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import "vite-plugin-chunk-split";
var vite_config_default = defineConfig({
  define: {
    "process.env": process.env
  },
  plugins: [
    svelte(),
    viteCommonjs(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/static/*",
          dest: "./static"
        },
        {
          src: "./CNAME",
          dest: "./"
        }
      ]
    })
  ],
  base: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnXHJcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSAndml0ZS1wbHVnaW4tc3RhdGljLWNvcHknXHJcbmltcG9ydCB7IHZpdGVDb21tb25qcyB9IGZyb20gJ0BvcmlnaW5qcy92aXRlLXBsdWdpbi1jb21tb25qcydcclxuaW1wb3J0IHsgY2h1bmtTcGxpdFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWNodW5rLXNwbGl0JztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgZGVmaW5lOiB7XHJcbiAgICAncHJvY2Vzcy5lbnYnOiBwcm9jZXNzLmVudlxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgc3ZlbHRlKCksXHJcbiAgICB2aXRlQ29tbW9uanMoKSxcclxuICAgIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgdGFyZ2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJy4vc3JjL3N0YXRpYy8qJyxcclxuICAgICAgICAgIGRlc3Q6ICcuL3N0YXRpYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJy4vQ05BTUUnLFxyXG4gICAgICAgICAgZGVzdDogJy4vJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSksXHJcbiAgXSxcclxuICBiYXNlOiAnLi8nLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLGVBQWUsUUFBUTtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxNQUFNO0FBQ1IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
