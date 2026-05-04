import Layout from '@components/layout/Layout'
import Button from '@ui/button/Button'
import Field from '@ui/field/Field'
import Loader from '@ui/Loader'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('auth')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		//type
		console.log(data)
	}
	return (
		<>
			<Layout
				heading="Login"
				bgImage="/images/auth-bg.png"
			/>
			<div className="wrapper-inner-page">
				{true && <Loader />}
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
						<Button clickHandler={() => setType('auth')}>Log In</Button>
						<Button clickHandler={() => setType('register')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
