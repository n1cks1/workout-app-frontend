import { useNavigate } from 'react-router-dom'
import styles from '../styles.module.scss'
import {createWorkoutSlug} from "@shared/lib/slug";

export const WorkoutItem = ({ data }) => {
	const nav = useNavigate()


	return (
		<div className="wrapper-inner-page">
			<div className={styles.wrapper}>
				{data?.map(workout => (
					<button
						key={`key_${workout.id}`}
						onClick={() => {
							nav(`/workouts/${createWorkoutSlug(workout.name)}/${workout.id}`)
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
