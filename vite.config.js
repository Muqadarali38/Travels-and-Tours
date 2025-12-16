import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access from any IP
    port: 5174,
    open: true,
    strictPort: true // Use only this port
  }
})

