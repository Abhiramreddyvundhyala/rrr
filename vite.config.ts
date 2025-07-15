// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ Correct if you're using a custom domain
  plugins: [react()],
})
