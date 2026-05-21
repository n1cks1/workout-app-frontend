import WorkoutService from '@service/workout/WorkoutService'
import { useQuery } from '@tanstack/react-query'
import { Workout } from './types'

export const useListWorkouts = () =>
	useQuery<Workout[]>({
		queryKey: ['get list workouts'],
		queryFn: () => WorkoutService.getAll()
	})
