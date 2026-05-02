import styles from '@components/layout/header/Header.module.scss'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'

const Header = ({ backLink }) => {
	//  TODO: доделать backlink
	return (
		<div className={styles.header}>
			<Link to={backLink}>
				<FaArrowLeft
					color="white"
					fontSize="29px"
				/>
			</Link>
			<Hamburger />
		</div>
	)
}

export default Header
