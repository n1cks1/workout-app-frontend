import { Alert } from '@shared/ui/alert/ui/Alert'
import { Button } from '@shared/ui/Button'
import { Field } from '@shared/ui/Field'
import { Loader } from '@shared/ui/Loader'
import { Link } from 'react-router-dom'
import { useNewWorkoutForm } from '../model/useNewWorkoutForm'
import { SelectExercise } from './SelectExercise'

export const NewWorkoutForm = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isPending,
		onSubmit,
		isSuccess,
		error
	} = useNewWorkoutForm()

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

				<Link
					to="/new-exercise"
					className="dark-link"
				>
					Create new exercise
				</Link>

				<SelectExercise control={control} />

				<Button handleSubmit={null}>Create</Button>
			</form>
		</div>
	)
}
