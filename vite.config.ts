import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rrr/', // 👈 necessary for GitHub Pages under repo name
  plugins: [react()],
});
