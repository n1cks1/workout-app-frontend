import { exerciseLogService, TExerciseTime } from '@entities/exercise-log'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MutationProps } from '../types'

export const useExerciseTimeMutation = () => {
	const queryClient = useQueryClient()

	const { mutate, data } = useMutation<TExerciseTime, Error, MutationProps>({
		mutationFn: ({ body, timeId }: MutationProps) =>
			exerciseLogService.updateTime(body, timeId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['exerciseLog'] })
		}
	})
	return { mutate, data }
}
