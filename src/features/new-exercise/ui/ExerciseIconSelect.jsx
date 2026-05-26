import { getIconPath } from '@shared/lib/getIconPath.util.ts'
import cn from 'clsx'
import { Controller } from 'react-hook-form'
import styles from './ExerciseIconSelect.module.scss'

const data = ['back', 'biceps', 'chest', 'hit', 'legs', 'shoulders']

export const ExerciseIconSelect = ({ control }) => {
	return (
		<div>
			<Controller
				control={control}
				name="iconPath"
				render={({ field: { value, onChange } }) => (
					<div className={styles.images}>
						{data.map(name => (
							<img
								key={`ex img ${name}`}
								src={`${import.meta.env.VITE_SERVER_URL}/${getIconPath(name)}`}
								alt={name}
								className={cn({
									[styles.active]: value === getIconPath(name)
								})}
								onClick={() => {
									onChange(getIconPath(name))
								}}
								height="45"
							/>
						))}
					</div>
				)}
			/>
		</div>
	)
}
