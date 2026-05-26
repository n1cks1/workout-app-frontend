import { ExerciseItem } from '@widgets/workout/exercise-item'
import styles from '../styles.module.scss'

export const ExerciseList = ({ data }) => {
	return (
		<div className="wrapper-inner-page">
			<div className={styles.wrapper}>
				{data?.exerciseLogs?.map(exerciseLog => (
					<ExerciseItem
						key={exerciseLog.id}
						exerciseLog={exerciseLog}
					/>
				))}
			</div>
		</div>
	)
}
