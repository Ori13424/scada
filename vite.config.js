import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Inside vite.config.js
define: {
  global: 'window',
}
})