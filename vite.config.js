import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://backend.server',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
