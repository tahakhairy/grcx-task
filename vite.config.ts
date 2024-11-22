import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  base: '/grcx-task/',
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://139.162.137.167/api',
    //     changeOrigin: false,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
