import Layout from '@components/layout/Layout'
import Button from '@components/ui/button/Button'
import Field from '@components/ui/field/Field'
import Loader from '@components/ui/Loader'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Auth.module.scss'
import { useAuthMutation } from './useAuthMutation'

const Auth = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isPending } = useAuthMutation(type, reset)

	const onSubmit = data => {
		mutate(data)
	}
	return (
		<>
			<Layout
				heading="Login"
				bgImage="/images/auth-bg.png"
			/>
			<div className="wrapper-inner-page">
				{isPending && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						type="email"
						placeholder="Enter Email"
						name="email"
						register={register}
						options={{ required: 'Email is required' }}
						error={errors?.email?.message}
					/>

					<Field
						type="password"
						placeholder="Enter password"
						name="password"
						register={register}
						options={{ required: 'Password is required' }}
						error={errors?.password?.message}
					/>
					<div className={styles.wrapperButtons}>
						<Button
							clickHandler={() => {
								setType('login')
							}}
						>
							Log In
						</Button>
						<Button clickHandler={() => setType('register')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
