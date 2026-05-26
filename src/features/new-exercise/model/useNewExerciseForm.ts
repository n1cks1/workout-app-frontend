import { useForm } from 'react-hook-form'
import { useNewExerciseMutation } from './useNewExerciseMutation'

export const useNewExerciseForm = () => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isSuccess, error, isPending } = useNewExerciseMutation(reset)

	const onSubmit = data => {
		mutate(data)
	}

	return {
		register,
		handleSubmit,
		control,
		onSubmit,
		isSuccess,
		error,
		isPending
	}
}
