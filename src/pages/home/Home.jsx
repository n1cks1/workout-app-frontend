import Layout from '@components/layout/Layout'
import { useAuth } from '@hooks/useAuth'
import Button from '@ui/button/Button'
import Counters from '@ui/counters/Counters'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import { counters } from './counters.data'

const Home = () => {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button clickHandler={() => navigate(!isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters items={counters} />
		</Layout>
	)
}

export default Home
