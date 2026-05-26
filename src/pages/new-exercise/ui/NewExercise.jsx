import { Layout } from '@widgets/Layout'

import { NewExerciseForm } from '@features/new-exercise'

export const NewExercise = () => {
	return (
		<>
			<Layout
				heading="Create New Exercise"
				bgImage={'/images/new-exercise-bg.jpg'}
			/>
			<div className="wrapper-inner-page">
				<NewExerciseForm />
			</div>
		</>
	)
}
