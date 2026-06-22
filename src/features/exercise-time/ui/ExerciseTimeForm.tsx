import { useExerciseTimeForm } from '@features/exercise-time/model'
import { Button } from '@shared/ui/button'
import { Field } from '@shared/ui/field'
import styles from './ExerciseTimeForm.module.scss'

type Props = {
	setOpenId: (id: number | null) => void
	id: number
}

export const ExerciseTimeForm = ({ setOpenId, id }: Props) => {
	const { onSubmit, handleSubmit, register, errors } = useExerciseTimeForm(id)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.wrapper}
		>
			<div className={styles.fields}>
				<div className={styles.field}>
					<p>Повторения</p>
					<Field
						type="text"
						name="repeat"
						register={register}
						options={{
							required: 'repeat is required',
							valueAsNumber: true,
							validate: value => value > 0
						}}
						error={errors?.repeat?.message}
					/>
				</div>

				<div className={styles.field}>
					<p>Вес</p>
					<Field
						className={styles.input}
						type="text"
						name="weight"
						register={register}
						options={{
							required: 'weight is required',
							valueAsNumber: true,
							validate: value => value > 0
						}}
						error={errors?.weight?.message}
					/>
					<p>кг</p>
				</div>
			</div>

			<div className={styles.buttons}>
				<Button
					size={'small'}
					clickHandler={e => {
						e.stopPropagation()
						setOpenId(null)
					}}
					type={'button'}
				>
					отменить
				</Button>
				<Button
					size={'confirm'}
					clickHandler={null}
					type={'submit'}
				>
					Оk
				</Button>
			</div>
		</form>
	)
}
