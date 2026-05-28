import { workoutLogService } from '@entities/workout-log'
import { useQuery } from '@tanstack/react-query'

export const useSingleWorkoutLogQuery = (id: number) =>
	useQuery({
		queryKey: ['workoutLog', id],
		queryFn: () => workoutLogService.getSingle(id),
		select: ({ data }) => data
	})
