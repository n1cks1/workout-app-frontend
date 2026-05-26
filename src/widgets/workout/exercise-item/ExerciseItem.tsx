import { useNavigate } from 'react-router-dom'
import styles from '../styles.module.scss'

export const ExerciseItem = ({ exerciseLog }) => {
	const nav = useNavigate()
	const exercise = exerciseLog.exercise[0]

	return (
		<>
			<button
				className={styles.exercise}
				onClick={() => {
					nav(`/exercise/${exercise.exerciseLogId}`)
				}}
			>
				{exercise.name}

				<img
					src={`${import.meta.env.VITE_SERVER_URL}/${exercise.iconPath}`}
					draggable="false"
				/>
			</button>
		</>
	)
}
