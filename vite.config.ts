import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteCommonjs, esbuildCommonjs  } from '@originjs/vite-plugin-commonjs'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ['./node_modules/avrgirl-arduino/dist/avrgirl-arduino.global.js'],
    }
  },
  plugins: [
    svelte(),
    viteCommonjs({
      include: ['./node_modules/avrgirl-arduino/avrgirl-arduino-browser.js'],
    }),
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
