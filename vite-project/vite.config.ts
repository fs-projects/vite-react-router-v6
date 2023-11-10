import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  css: {
    devSourcemap: true
  },
  server:{
    port: 3000,
    // open: "index.html" - vite will open this file when server starts
  },
  preview:{
    port: 3001,
    // strictPort: true - enable this only when you want only port 3001 for preview
  },
  envDir: "viteenvdir"
})
