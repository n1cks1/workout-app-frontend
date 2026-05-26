import { Button } from '@shared/ui/button'
import { Layout } from '@widgets/Layout'
import { Counters } from '@widgets/profile'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'

export const Home = () => {
	const navigate = useNavigate()

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters />
		</Layout>
	)
}
