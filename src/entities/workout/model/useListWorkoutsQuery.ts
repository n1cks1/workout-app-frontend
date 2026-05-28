import { workoutService } from '@entities/workout'
import { useQuery } from '@tanstack/react-query'
import { Workout } from '@entities/workout'

export const useListWorkoutsQuery = () =>
	useQuery<Workout[]>({
		queryKey: ['workouts'],
		queryFn: () => workoutService.getAll()
	})
