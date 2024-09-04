import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "/"),
      '@components': path.resolve(__dirname, "./src/components"),
      '@stores': path.resolve(__dirname, "./src/stores"),
      '@pages': path.resolve(__dirname, "./src/pages"),
      '@icons': path.resolve(__dirname, "./src/assets/icons"),
    }
  }
})
