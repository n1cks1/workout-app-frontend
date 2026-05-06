import { AuthContext } from '@components/context/AuthContext'
import Cookies from 'js-cookie'
import { useMemo, useState } from 'react'

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(() => !!Cookies.get('notif'))

	const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth])

	return <AuthContext value={value}>{children}</AuthContext>
}

export default AuthProvider
