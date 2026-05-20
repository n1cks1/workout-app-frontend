import Layout from '@components/layout/Layout'
import { useSingleExercise } from './useSingleExercise'

const SingleExercise = () => {
	const { data } = useSingleExercise(4)

	return (
		<>
			<Layout
				bgImage="/images/ex-bg-1.jpg"
				heading={data.name}
			/>
		</>
	)
}

export default SingleExercise
