import { useUpdateWorkoutLogMutation } from '@features/workout-log/update-workout-log'

export const useUpdateWorkoutLog = () => {
	const { mutate, data, isPending } = useUpdateWorkoutLogMutation()

	const updateWorkoutLog = (
		workoutLogId: number,
		workoutId: number,
		statusCompleted: boolean
	) => {
		mutate({ workoutLogId, workoutId, statusCompleted })
	}

	return {
		updateWorkoutLog,
		isPending,
		data
	}
}
