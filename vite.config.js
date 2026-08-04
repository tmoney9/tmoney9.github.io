import { defineConfig } from 'vite';

// Set BROWSER environment variable to 'chrome' to bypass Windows file path space issues
process.env.BROWSER = 'chrome';

export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: [
    {
      name: 'watch-markdown-live-reload',
      configureServer(server) {
        // Explicitly watch all markdown files in content/ directory
        server.watcher.add('content/**/*.md');
      },
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.md')) {
          server.config.logger.info(`Markdown file changed: ${file}`, { timestamp: true });
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        lifebit: 'lifebit.html',
        lifebitEtl: 'lifebit-etl.html',
        kiinBio: 'kiin-bio.html',
        coopBank: 'coop-bank.html',
        designProcess: 'design-process.html'
      }
    }
  },
  server: {
    open: true,
    watch: {
      usePolling: true, // Ensures file system changes in Windows are picked up instantly
      interval: 100
    }
  },
});
