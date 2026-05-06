import styles from './Counters.module.scss'

const Counters = ({ items }) => {
	return (
		<div className={styles.wrapper}>
			{items.map((item, idx) => (
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
