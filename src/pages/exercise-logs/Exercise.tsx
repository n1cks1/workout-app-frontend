import { ExerciseLog } from '@widgets/exercise-log'
import {Layout} from "@widgets/Layout";
import {useParams} from "react-router-dom";
import {useExerciseLogQuery} from "@entities/exercise-log/model/useExerciseLogQuery";

export const Exercise = () => {
	const { id } = useParams()
	const { data } = useExerciseLogQuery(Number(id))

	console.log(data)
	return (
		<>
			<Layout
				bgImage='/images/workout-bg.jpg'
				heading={data?.exercise[0].name}
			/>
			<div className="wrapper-inner-page">
				<ExerciseLog exerciseLog={data}/>
			</div>
		</>
	)
}
