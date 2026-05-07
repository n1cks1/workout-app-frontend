import { useProfile } from '@components/pages/profile/useProfile'
import styles from './Counters.module.scss'

const Counters = () => {
	const { data } = useProfile()

	return (
		<div className={styles.wrapper}>
			{data?.statistics?.map((item, idx) => (
				<div
					key={idx}
					className={styles.counter}
				>
					<div className={styles.label}>{item.label}</div>
					<div>{item.value}</div>
				</div>
			))}
		</div>
	)
}

export default Counters
