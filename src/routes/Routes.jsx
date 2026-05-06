import NotFound from '@components/pages/not-found/NotFound'
import { useAuth } from '@hooks/useAuth'
import { privateRoutes, publicRoutes } from '@routes/routes.data'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from '../components/pages/auth/Auth'
import PrivateRoutes from './PrivateRoutes'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}

				<Route
					path="/auth"
					element={
						isAuth ? (
							<Navigate
								to="/"
								replace
							/>
						) : (
							<Auth />
						)
					}
				/>

				<Route element={<PrivateRoutes />}>
					{privateRoutes.map(route => (
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
