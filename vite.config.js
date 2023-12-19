import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: env.DATABASE_URL ,
  },
  plugins: [react()],
  build:
    {
        manifest: true,
        rollupOptions: {
          input: '/path/to/main.js',
        },
        commonjsOptions: {
          exclude: ['ckeditor/*'],
        },
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
})
