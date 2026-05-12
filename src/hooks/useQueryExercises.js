import ExerciseService from '@service/exercise/ExerciseService'
import { useQuery } from '@tanstack/react-query'

export const useQueryExercises = () => {
	return useQuery({
		queryKey: ['get exercise'],
		queryFn: () => ExerciseService.getExercises(),
		select: ({ data }) => data
	})
}
