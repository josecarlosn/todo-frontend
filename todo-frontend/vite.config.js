import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Altere para a porta desejada (ex: 3000, 8080, etc.)
    strictPort: true, // Garante que o Vite falhe se a porta estiver ocupada
  },
});