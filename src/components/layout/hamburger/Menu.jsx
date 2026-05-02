import styles from '@components/layout/hamburger/Hamburger.module.scss'
import { menu } from '@components/layout/hamburger/menu.data'
import cn from 'clsx'
import { Link } from 'react-router-dom'

const Menu = ({ isShow }) => {
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
						<Link>Logout</Link>
					</li>
				</ul>
			</nav>
		)
	)
}

export default Menu
