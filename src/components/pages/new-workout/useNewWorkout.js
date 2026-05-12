import WorkoutService from '@service/workout/WorkoutService'
import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => WorkoutService.create(body),
		onSuccess: () => {
			reset({
				name: '',
				exerciseIds: []
			})
		}
	})

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
	}

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
		[errors, register, control, handleSubmit, isSuccess, error, isPending]
	)
}
