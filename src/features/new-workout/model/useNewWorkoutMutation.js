import { workoutService } from '@entities/workout'
import { createWorkoutSlug } from '@shared/lib/slug'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useNewWorkoutMutation = (reset) => {
	const nav = useNavigate()
	const queryClient = useQueryClient()

	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: ['workout'],
		mutationFn: body => workoutService.create(body),
		onSuccess: data => {
			console.log(data)
			queryClient.setQueryData(['workout', data.id], data)

			queryClient.removeQueries({
				queryKey: ['workout']
			})

			const previous = queryClient.getQueriesData(['workout', data.id])

			console.log(previous)
			reset({
				name: '',
				exerciseIds: []
			})
			nav(`/workouts/${createWorkoutSlug(data.name)}/${data.id}`)
		}
	})

	return {
		mutate,
		isPending,
		error,
		isSuccess
	}
}
