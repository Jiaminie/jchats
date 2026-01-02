import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://jiaminie.co.ke',
      dynamicRoutes: [
        '/how-it-works',
        '/use-cases',
        '/success-stories',
        '/get-started',
        '/faq',
        '/pricing',
        '/legal',
        '/terms',
        '/privacy',
        '/about'
      ]
    })
  ],
  server: {
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
