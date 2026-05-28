import { Workout } from '@entities/workout'
import { workoutLogService } from '@entities/workout-log'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type MutationProps = {
	workoutLogId: number
	workoutId: number
	statusCompleted?: boolean
}

export const useUpdateWorkoutLogMutation = () => {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: ({ workoutLogId, statusCompleted }: MutationProps) =>
			workoutLogService.complete(workoutLogId, statusCompleted),
		onMutate: async ({ workoutId, workoutLogId }: MutationProps) => {
			await queryClient.cancelQueries({
				queryKey: ['workout', workoutId]
			})

			const previous = queryClient.getQueryData<Workout>(['workout', workoutId])

			queryClient.setQueryData(['workout', workoutId], (old: Workout) => {
				if (!old) return old

				return {
					...old,
					workoutLogs: old.workoutLogs?.map(workoutLog =>
						workoutLog.id === workoutLogId
							? { ...workoutLog, isCompleted: !workoutLog.isCompleted }
							: workoutLog
					)
				}
			})
			return { previous }
		},
		onError: (_err, { workoutId }, context) => {
			queryClient.setQueryData(['workout', workoutId], context?.previous)
		}
	})

	return { mutate, isPending }
}
