import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form'

export type LoginForm = {
	email: string
	password: string
}

export type AuthType = 'login' | 'register'

export type AuthFormProps = {
	register: UseFormRegister<LoginForm>
	isPending: boolean
	handleSubmit: UseFormHandleSubmit<LoginForm>
	onSubmit: (data: LoginForm) => void
	errors: FieldErrors<LoginForm>
	setType: React.Dispatch<React.SetStateAction<AuthType>>
}
