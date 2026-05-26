import { useSingleWorkoutQuery } from '@entities/workout'
import { Loader } from '@shared/ui/loader'
import { Layout } from '@widgets/Layout'
import { ExerciseList } from '@widgets/workout/exercise-list'
import { useParams } from 'react-router-dom'

export const Workout = () => {
	const { id } = useParams() //wokrout-log-id

	const { data, isPending, isError } = useSingleWorkoutQuery(id)

	if (isPending) {
		return (
			<>
				<Layout
					bgImage="/images/workout-bg.jpg"
					heading={<Loader />}
				/>
				<div className="wrapper-inner-page">
					<Loader />
				</div>
			</>
		)
	}

	if (isError) {
		return (
			<>
				<Layout
					bgImage="/images/workout-bg.jpg"
					heading="Упс.."
				/>
				<div className="wrapper-inner-page">
					Что-то пошло не так, попробуйте перезагрузить страницу
				</div>
			</>
		)
	}

	return (
		<>
			<Layout
				bgImage="/images/workout-bg.jpg"
				heading={data?.workout?.name}
			/>
			<ExerciseList data={data} />
		</>
	)
}
