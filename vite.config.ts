import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteCommonjs, esbuildCommonjs  } from '@originjs/vite-plugin-commonjs'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/hex/StandardFirmata.hex',
          dest: 'hex'
        }
      ]
    })

  ],
  base: './',
  optimizeDeps:{
    esbuildOptions:{
      define: {
        global: 'window'
      },
      plugins:[
        esbuildCommonjs(['avrgirl-arduino']),
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })

      ]
    }
  },

})
