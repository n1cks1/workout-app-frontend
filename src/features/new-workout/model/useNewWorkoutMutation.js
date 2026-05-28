import { workoutService } from '@entities/workout'
import { useMutation } from '@tanstack/react-query'

export const useNewWorkoutMutation = reset => {
	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: ['workout'],
		mutationFn: body => workoutService.create(body),
		onSuccess: () => {
			reset({
				name: '',
				exerciseIds: []
			})
		}
	})

	return {
		mutate,
		isPending,
		error,
		isSuccess
	}
}
