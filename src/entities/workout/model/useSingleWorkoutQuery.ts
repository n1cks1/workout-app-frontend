import { workoutLogService } from '@entities/workout-log'
import { useQuery } from '@tanstack/react-query'

export const useSingleWorkoutQuery = id =>
	useQuery({
		queryKey: ['get workout log'],
		queryFn: () => workoutLogService.getSingle(id),
		select: ({ data }) => data
	})
