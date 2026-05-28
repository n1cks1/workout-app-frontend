import { workoutService } from '@entities/workout'
import { createWorkoutSlug } from '@shared/lib/slug'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useNewWorkoutMutation = reset => {
	const nav = useNavigate()

	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: ['workout'],
		mutationFn: body => workoutService.create(body),
		onSuccess: data => {
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
