import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fromSrc = (p = '') => path.resolve(__dirname, './src', p)

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@shared': fromSrc('shared'),
			'@pages': fromSrc('pages'),
			'@features': fromSrc('features'),
			'@entities': fromSrc('entities'),
			'@app': fromSrc('app'),
			'@widgets': fromSrc('widgets')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use "@shared/styles/variables.scss" as *;
					@use "@shared/styles/animations.scss" as *;
        `
			}
		}
	}

	//for testing on mobile with hotspot, change api.js -> url_api = '/api'

	// server: {
	// 	host: '0.0.0.0',
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://172.20.10.9:3000/',
	// 			changeOrigin: true
	// 		}
	// 	}
	// }
})

// CSS без импортов + пример настройки алиасов

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@styles': path.resolve(__dirname, './src/styles'),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @use "@styles/abstracts/variables" as *;
//           @use "@styles/abstracts/mixins" as *;
//         `,
//       },
//     },
//   },
// })
