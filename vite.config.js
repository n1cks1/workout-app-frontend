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
			'@styles': fromSrc('assets/styles'),
			'@components': fromSrc('components'),
			'@hooks': fromSrc('hooks'),
			'@routes': fromSrc('routes'),
			'@service': fromSrc('service')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "@styles/_variables" as *;
          @use "@styles/_animations" as *;
        `
			}
		}
	}
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
