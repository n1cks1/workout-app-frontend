import Alert from '@components/ui/alert/Alert'
import Loader from '@components/ui/Loader'
import { useNavigate } from 'react-router-dom'
import styles from '../Workout.module.scss'
import { useListWorkouts } from './useListWorkouts'

const ListWorkouts = () => {
	const { data, isPending, isError } = useListWorkouts()
	const nav = useNavigate()

	const isTrue = true
	if (isPending) {
		return (
			<div className="wrapper-inner-page">
				<Loader />
			</div>
		)
	}

	if (isError) {
		return (
			<div className="wrapper-inner-page">
				<Alert type="error">
					Что-то пошло не так, попробуйте перезагрузить страницу
				</Alert>
			</div>
		)
	}

	return (
		<>
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
		</>
	)
}

export default ListWorkouts
