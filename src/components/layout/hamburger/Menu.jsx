import styles from '@components/layout/hamburger/Hamburger.module.scss'
import { menu } from '@components/layout/hamburger/menu.data'
import { useAuth } from '@hooks/useAuth'
import cn from 'clsx'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth()

	const logoutHandler = () => {
		Cookies.remove('notif')
		setIsAuth(false)
		setIsShow(false)
	}

	return (
		isShow && (
			<nav className={cn(styles.menu, { [styles.show]: isShow })}>
				<ul>
					{menu.map((item, idx) => (
						<li key={`_menu_${idx}`}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
					<li>
						<button
							onClick={() => {
								logoutHandler()
							}}
						>
							Logout
						</button>
					</li>
				</ul>
			</nav>
		)
	)
}

export default Menu
