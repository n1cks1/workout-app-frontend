import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthType, type LoginForm } from './types'
import { useAuthMutation } from './useAuthMutation'

export const useAuthForm = () => {
	const [type, setType] = useState<AuthType>('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<LoginForm>({
		mode: 'onChange'
	})

	const { mutate, isPending } = useAuthMutation(type, reset)

	const onSubmit = (data: LoginForm) => {
		mutate(data)
	}

	return {
		register,
		handleSubmit,
		errors,
		mutate,
		isPending,
		onSubmit,
		setType
	}
}
