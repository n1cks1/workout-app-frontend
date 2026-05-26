import { AuthForm } from '@features/auth'
import { useAuthForm } from '@features/auth/model/useAuthForm'
import { Layout } from '@widgets/Layout'

export const Auth = () => {
	const form = useAuthForm()
	return (
		<>
			<Layout
				heading="Login"
				bgImage="/images/auth-bg.png"
			/>
			<div className="wrapper-inner-page">
				<AuthForm {...form} />
			</div>
		</>
	)
}
