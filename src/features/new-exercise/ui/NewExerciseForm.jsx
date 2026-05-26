import { Alert } from '@shared/ui/alert/ui/Alert'
import { Button } from '@shared/ui/button'
import { Field } from '@shared/ui/field'
import { Loader } from '@shared/ui/loader'
import { useNewExerciseForm } from '../model/useNewExerciseForm'
import { ExerciseIconSelect } from './ExerciseIconSelect'

export const NewExerciseForm = () => {
	const {
		register,
		handleSubmit,
		control,
		errors,
		onSubmit,
		isPending,
		isSuccess,
		error
	} = useNewExerciseForm()

	return (
		<div>
			{isSuccess && <Alert text={'Exercise created'} />}
			{error && (
				<Alert
					type={error}
					text={error}
				/>
			)}
			{isPending && <Loader />}
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					placeholder="Enter name"
					name="name"
					type="text"
					register={register}
					error={errors?.name?.message}
					options={{
						required: 'Name is required'
					}}
				/>

				<Field
					placeholder="Times"
					name="times"
					type="text"
					register={register}
					error={errors?.times?.message}
					options={{
						required: 'Times is required number',
						valueAsNumber: true,
						validate: value => value > 0
					}}
				/>

				<ExerciseIconSelect control={control} />
				<Button handleSubmit={null}>Create</Button>
			</form>
		</div>
	)
}
