import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // The project lives on an exFAT volume where native file events are
      // unreliable — poll so HMR picks up edits.
      usePolling: true,
      interval: 300,
    },
  },
})
