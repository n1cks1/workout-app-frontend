import { Layout } from '@widgets/Layout'

import { NewExerciseForm } from '@features/new-exercise'
import {Button} from "@shared/ui/button/index.ts";

export const NewExercise = () => {
	return (
		<>
			<Layout
				heading="Create New Exercise"
				bgImage={'/images/new-exercise-bg.jpg'}
			/>
			<div className="wrapper-inner-page">
				<NewExerciseForm />
				<Button type='submit' formId='exercise-form'>Создать</Button>
			</div>
		</>
	)
}
