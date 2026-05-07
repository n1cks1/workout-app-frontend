import Layout from '@components/layout/Layout'
import Counters from '@components/ui/counters/Counters'
import styles from './Profile.module.scss'
import { useProfile } from './useProfile'

const Profile = () => {
	const { data } = useProfile()

	return (
		<>
			<Layout
				heading={data?.name} //скорее всего нужен user в контексте
				bgImage="/images/profile-bg.jpg"
			>
				<Counters />
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
