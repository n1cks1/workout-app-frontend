import { useAuth } from '@hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
	const { isAuth } = useAuth()

	return isAuth ? <Outlet /> : <Navigate to="/auth" />
}

export default PrivateRoutes
