import Cookies from 'js-cookie'
import { useMemo, useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(() => !!Cookies.get('notif'))

	const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth])

	return <AuthContext value={value}>{children}</AuthContext>
}
