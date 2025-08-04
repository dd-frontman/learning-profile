import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'
import webfontDownload from 'vite-plugin-webfont-dl'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: '/learning-profile/',
  plugins: [
    vue(),
    vueDevTools(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false
    }),
    webfontDownload(
      [
       'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
      ],
      {
        assetsSubfolder: 'fonts',
        minifyCss: true,
        injectAsStyleTag: false
      }
    ),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        start_url: '/learning-profile/',
        scope: '/learning-profile/',
        name: 'Learning Profile',
        short_name: 'Profile',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            "src": "pwa/pwa-64x64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "pwa/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "pwa/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          },
        ],
        screenshots: [
          {
            "src": "pwa/screenshots/LargeTile.scale-150.png",
            "sizes": "465x465"
          },
          {
            "src": "pwa/screenshots/LargeTile.scale-200.png",
            "sizes": "620x620"
          },
          {
            "src": "pwa/screenshots/LargeTile.scale-400.png",
            "sizes": "1240x1240"
          },
          {
            "src": "pwa/screenshots/android-launchericon-512-512.png",
            "sizes": "512x512"
          },
          {
            "src": "pwa/screenshots/1024.png",
            "sizes": "1024x1024"
          },
          {
            "src": "pwa/screenshots/1366x768.jpg",
            "sizes": "1366x768",
            "form_factor": 'wide'
          }
        ]
      },
      devOptions: {
        enabled: true,
      },
      strategies: 'generateSW',
      workbox: {
        navigationPreload: true,
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
        ]
      },
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.mjs' : 'js'
      }
    },
    include: [
      'primevue',
      'primevue/*'
    ],
    exclude: ['@primeuix/themes']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /primevue/],
      extensions: ['.js', '.mjs'],
      transformMixedEsModules: true
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        unused: true,
        dead_code: true
      }
    },
    rollupOptions: {
      external: [
        /@primevue\/core/, /@primevue\/core\basecomponent/
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
