import styles from './ProfileContent.module.scss'

export const ProfileContent = () => {
	return (
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
	)
}
