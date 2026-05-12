import Layout from '@components/layout/Layout'
import Loader from '@components/ui/Loader'
import Alert from '@components/ui/alert/Alert'
import Button from '@components/ui/button/Button'
import Field from '@components/ui/field/Field'
import { Link } from 'react-router-dom'
import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isSuccess,
		error,
		isPending,
		onSubmit
	} = useNewWorkout()

	return (
		<>
			<Layout
				heading="Create New Workout"
				bgImage={'/images/new-exercise-bg.jpg'}
			/>
			<div className="wrapper-inner-page">
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

					<SelectExercises control={control} />

					<Button handleSubmit={null}>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
