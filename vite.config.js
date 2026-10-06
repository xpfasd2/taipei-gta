import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const routes = ['guides','maps','articles','about','contact','privacy','terms','cookies','copyright','faq','guides/getting-started','guides/taipei-map','guides/vehicles','guides/missions','articles/taipei-gta-city-guide'];
const input = { main: resolve(process.cwd(), 'index.html'), play: resolve(process.cwd(), 'play/index.html') };
for (const route of routes) input[route] = resolve(process.cwd(), `${route}/index.html`);

export default defineConfig({
  server: { host: '0.0.0.0', allowedHosts: ['terminal.local'] },
  build: { rollupOptions: { input }, chunkSizeWarningLimit: 12000 }
});




