import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Tailwind CSS is enabled via postcss.config.cjs
export default defineConfig({
  plugins: [react()],
})
