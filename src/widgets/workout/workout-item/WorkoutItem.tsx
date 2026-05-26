import { useNavigate } from 'react-router-dom'
import styles from '../styles.module.scss'

export const WorkoutItem = ({ data }) => {
	const nav = useNavigate()

	return (
		<div className="wrapper-inner-page">
			<p>List Workouts</p>
			<div className={styles.wrapper}>
				{data?.map(workout => (
					<button
						key={`key_${workout.id}`}
						onClick={() => {
							nav(`/workouts/${workout.name}`)
						}}
						className={styles.workout}
					>
						{workout.name}
					</button>
				))}
			</div>
		</div>
	)
}
