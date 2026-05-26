import { useAuth } from '@app/providers/auth-provider'
import AuthService from '@features/auth/api/AuthService'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import type { LoginForm } from './types'

export const useAuthMutation = (type, reset) => {
	const { setIsAuth } = useAuth()
	const nav = useNavigate()

	const { mutate, isPending } = useMutation<LoginForm, Error, LoginForm>({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) => {
			return AuthService.main(type, email, password)
		},
		onSuccess: () => {
			setIsAuth(true)
			nav('/')
			reset()
		}
	})

	return { mutate, isPending }
}
