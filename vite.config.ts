import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // 👈 Replace with your repo name if different
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
