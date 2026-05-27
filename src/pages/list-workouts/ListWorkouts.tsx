import { useListWorkoutsQuery } from '@entities/workout/'
import { Alert } from '@shared/ui/alert'
import { Loader } from '@shared/ui/loader'
import { WorkoutItem } from '@widgets/workout/workout-item/WorkoutItem'
import {Layout} from "@widgets/Layout";

export const ListWorkouts = () => {
	const { data, isPending, isError } = useListWorkoutsQuery()

	if (isPending) {
		return (
			<div className="wrapper-inner-page">
				<Loader />
			</div>
		)
	}

	if (isError) {
		return (
			<div className="wrapper-inner-page">
				<Alert type="error">
					Что-то пошло не так, попробуйте перезагрузить страницу
				</Alert>
			</div>
		)
	}

	return (
		<>
			<Layout bgImage='/images/new-exercise-bg.jpg'
				heading='list workouts'
			/>
			<WorkoutItem data={data} />
		</>
	)
}
