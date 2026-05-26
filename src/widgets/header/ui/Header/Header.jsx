import { useAuth } from '@app/providers/auth-provider'
import { FaArrowLeft, FaUser } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import { Hamburger } from '../hamburger/Hamburger'
import styles from './Header.module.scss'

export const Header = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(-1)
					}}
				>
					<FaArrowLeft
						color="white"
						fontSize="29px"
					/>
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<FaUser
						fontSize="23px"
						color="white"
					/>
				</button>
			)}
			<Hamburger />
		</header>
	)
}
