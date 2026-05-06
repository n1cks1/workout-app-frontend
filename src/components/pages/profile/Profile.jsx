import Layout from '@components/layout/Layout'
import { counters } from '@components/pages/home/counters.data'
import Counters from '@components/ui/counters/Counters'
import styles from './Profile.module.scss'
const Profile = () => {
	return (
		<>
			<Layout
				heading="Nikita" //скорее всего нужен user в контексте
				bgImage="/images/profile-bg.jpg"
			>
				<Counters items={counters} />
			</Layout>

			<div className={`wrapper-inner-page ${styles.wrapper}`}>
				<div className={styles.imgCard}>
					Before
					<img
						className={styles.img}
						src="/images/before.jpg"
						alt="beforeImg"
					/>
				</div>
				<div className={styles.imgCard}>
					After
					<img
						className={styles.img}
						src="/images/after.jpg"
						alt="afterImg"
					/>
				</div>
			</div>
		</>
	)
}

export default Profile
