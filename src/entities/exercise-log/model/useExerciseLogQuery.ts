import { exerciseLogService } from '@entities/exercise-log/'
import { useQuery } from '@tanstack/react-query'

export const useExerciseLogQuery = (id: number) =>
	useQuery({
		queryKey: ['exerciseLog', id],
		queryFn: () => exerciseLogService.getSingle(id)
	})
