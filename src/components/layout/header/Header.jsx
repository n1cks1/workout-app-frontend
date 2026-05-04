import styles from '@components/layout/header/Header.module.scss'
import { useAuth } from '@hooks/useAuth'
import { FaArrowLeft, FaUser } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
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

export default Header
