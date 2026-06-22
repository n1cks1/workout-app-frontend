import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNewWorkoutMutation } from './useNewWorkoutMutation'

export const useNewWorkoutForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isPending, error, isSuccess } = useNewWorkoutMutation(reset)

	const onSubmit = useCallback(
		data => {
			mutate({
				name: data.name,
				exerciseIds: data.exerciseIds.map(ex => ex.value)
			})},
		[mutate]
	)

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isSuccess,
			error,
			isPending,
			onSubmit
		}),
		[
			errors,
			register,
			control,
			handleSubmit,
			isSuccess,
			error,
			isPending,
			onSubmit
		]
	)
}
