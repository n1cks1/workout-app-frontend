import { workoutService } from '@entities/workout'
import { useQuery } from '@tanstack/react-query'
import { Workout } from '../../../pages/list-workouts/types'

export const useListWorkoutsQuery = () =>
	useQuery<Workout[]>({
		queryKey: ['get list workouts'],
		queryFn: () => workoutService.getAll()
	})
