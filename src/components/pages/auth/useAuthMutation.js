import { useAuth } from '@hooks/useAuth'
import AuthService from '@service/AuthService'
import { useMutation } from '@tanstack/react-query'

export const useAuthMutation = (type, reset) => {
	const { setIsAuth } = useAuth()

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) => {
			return AuthService.main(type, email, password)
		},
		onSuccess: () => {
			setIsAuth(true)
			reset()
		}
	})

	return { mutate, isPending }
}
