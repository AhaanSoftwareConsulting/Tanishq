import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { createRequire } from 'module';
 
const require = createRequire(import.meta.url);
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});