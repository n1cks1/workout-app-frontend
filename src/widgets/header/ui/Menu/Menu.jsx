import { useAuth } from '@app/providers/auth-provider'
import { menu } from '@widgets/header/ui/Menu/menu.data'
import cn from 'clsx'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export const Menu = ({ isShow, setIsShow }) => {
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
