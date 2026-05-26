import { exerciseService } from '@entities/exercise'
import { useMutation } from '@tanstack/react-query'

export const useNewExerciseMutation = reset => {
	const { mutate, isSuccess, error, isPending } = useMutation({
		mutationKey: ['create exercise'],
		mutationFn: body => exerciseService.create(body),
		onSuccess: () => {
			reset()
		}
	})

	return { isSuccess, error, isPending, mutate }
}
