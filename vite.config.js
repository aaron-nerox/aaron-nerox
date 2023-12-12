import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'group-home': [
            './src/views/Home.vue',
            './src/views/misc/NotFound.vue',
            './src/views/misc/NeowallsPolicy.vue',
            './src/views/misc/Splash.vue',
          ],
        },
      },
    }
  }
})
