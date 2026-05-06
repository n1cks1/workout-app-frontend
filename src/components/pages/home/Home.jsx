import Layout from '@components/layout/Layout'
import Button from '@components/ui/button/Button'
import Counters from '@components/ui/counters/Counters'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import { counters } from './counters.data'

const Home = () => {
	const navigate = useNavigate()

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters items={counters} />
		</Layout>
	)
}

export default Home
