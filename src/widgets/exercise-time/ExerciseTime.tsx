import { TExerciseTime } from '@entities/exercise-log/types'
import { ExerciseTimeForm } from '@features/exercise-time/ui'
import cn from 'clsx'
import styles from './ExerciseTime.module.scss'

type Props = {
	exerciseTime: TExerciseTime
	time: number
	openId: number
	setOpenId: (id: number | null) => void
}

export const ExerciseTime = ({
	exerciseTime,
	time,
	openId,
	setOpenId
}: Props) => {
	return (
		<>
			<div
				className={cn(styles.time, { [styles.active]: openId === time })}
				onClick={() => setOpenId(time)}
			>
				<p>подход {time + 1}</p>
				{openId === time ? (
					<>
						<ExerciseTimeForm
							id={exerciseTime.id}
							setOpenId={setOpenId}
						/>
					</>
				) : (
					<>
						<p>repeat: {exerciseTime.repeat}</p>
						<p>weight: {exerciseTime.weight}</p>
					</>
				)}
			</div>
		</>
	)
}
