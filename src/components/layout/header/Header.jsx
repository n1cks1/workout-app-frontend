import styles from '@components/layout/header/Header.module.scss'
import { FaArrowLeft, FaUser } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

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
						navigate('/profile')
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
