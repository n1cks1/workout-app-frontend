import { NewWorkoutForm } from '@features/new-workout/ui/NewWorkoutForm'
import { Layout } from '@widgets/Layout'

export const NewWorkout = () => {
	return (
		<>
			<Layout
				heading="Create New Workout"
				bgImage={'/images/new-exercise-bg.jpg'}
			/>

			<div className="wrapper-inner-page">
				<NewWorkoutForm />
			</div>
		</>
	)
}
