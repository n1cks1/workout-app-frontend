import { TExerciseLog } from '@entities/exercise-log'
import { ExerciseTime } from '@widgets/exercise-time'
import { useState } from 'react'
import styles from './ExerciseLog.module.scss'

type Props = {
	exerciseLog: TExerciseLog
}

export const ExerciseLog = ({ exerciseLog }: Props) => {
	const [openId, setOpenId] = useState<number | null>(null)

	return (
		<>
			<div className={styles.log}>
				{/* повесить useClickOutside и если вводились какие-то данные вызывать alert с инфой о том, что не сохранены*/}
				{exerciseLog?.times.map((times, idx) => (
					<ExerciseTime
						// isShow={isShow}
						// setIsShow={setIsShow}
						key={times.id}
						exerciseTime={times}
						time={idx}
						openId={openId}
						setOpenId={setOpenId}
					/>
				))}
			</div>
		</>
	)
}
