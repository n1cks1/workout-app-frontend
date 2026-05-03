import { useAuth } from '@hooks/useAuth'
import NotFound from '@pages/NotFound/NotFound'
import { routes } from '@routes/routes.data'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={
							route.auth && !isAuth ? (
								<Navigate
									to="/auth"
									replace
								/>
							) : (
								<route.component />
							)
						}
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
