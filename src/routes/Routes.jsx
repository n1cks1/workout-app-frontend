import NotFound from '@pages/NotFound/NotFound'
import { routes } from '@routes/routes.data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
	return (
		// TODO: доделать авторизацию
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						element={<route.component />}
						path={route.path}
					/>
				))}

				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
