import { Auth } from '@pages/auth'
import { NotFound } from '@pages/not-found/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import { routes } from './routes.data'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/auth"
					element={<Auth />}
				/>

				<Route element={<PrivateRoutes />}>
					{routes.map(route => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					))}
				</Route>

				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
