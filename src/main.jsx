import Router from '@routes/Routes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router />
	</StrictMode>
)
