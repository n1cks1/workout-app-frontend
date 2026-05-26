/// <reference types="vite/client" /> // для import.meta.env (VITE ENV)
declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}
