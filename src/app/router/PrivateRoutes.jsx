import { useAuth } from '@app/providers/auth-provider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
	const { isAuth } = useAuth()

	return isAuth ? (
		<Outlet />
	) : (
		<Navigate
			to="/auth"
			replace
		/>
	)
}

export default PrivateRoutes
