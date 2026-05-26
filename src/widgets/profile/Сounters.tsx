import { useProfileQuery } from '@entities/user'
import styles from './Counters.module.scss'

export const Counters = () => {
	const { data } = useProfileQuery()

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
