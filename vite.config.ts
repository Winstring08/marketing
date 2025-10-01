import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@'를 src 경로로 지정
      '~': path.resolve(__dirname, 'shared'), // '~'를 shared 경로로 지정
    },
  },
})
