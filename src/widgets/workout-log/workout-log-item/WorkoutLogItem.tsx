import { WorkoutLog } from '@entities/workout-log'
import { useFormatDate } from '@shared/lib/format-date'
import styles from './WorkoutLogItem.module.scss'

import { useUpdateWorkoutLog } from '@features/workout-log/update-workout-log'
import { MdDone, MdOutlineCancel } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

type Props = {
	workoutLog: WorkoutLog
}

export const WorkoutLogItem = ({ workoutLog }: Props) => {
	const formattedDate = useFormatDate(workoutLog.createdAt)
	const { updateWorkoutLog, data, isPending } = useUpdateWorkoutLog()
	const nav = useNavigate()

	const isCompleted = workoutLog.isCompleted

	return (
		<div
			className={styles.wrapper}
			onClick={() => nav(`/workout/${workoutLog.id}`)}
		>
			<p>
				Создано: <span>{formattedDate}</span>
			</p>

			<div
				className={styles.status}
				onClick={e => {
					e.stopPropagation()
					e.preventDefault()
				}}
			>
				<p>{workoutLog.isCompleted ? 'Выполнено' : 'Не выполнено'}</p>

				<button
					className={styles.blockIconChange}
					onClick={() => {
						updateWorkoutLog(workoutLog.id, workoutLog.workoutId, !isCompleted)
					}}
				>
					{isCompleted ? (
						<MdOutlineCancel className={styles.iconChange} />
					) : (
						<MdDone className={styles.iconChange} />
					)}
				</button>
			</div>
		</div>
	)
}
