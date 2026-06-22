import { InputHTMLAttributes } from 'react'
import type {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'
import styles from './Field.module.scss'

type Props<T extends FieldValues, TName extends Path<T>> = {
	register: UseFormRegister<T>
	name: TName
	error?: string
	options?: RegisterOptions<T, TName>
} & InputHTMLAttributes<HTMLInputElement>

export const Field = <T extends FieldValues, TName extends Path<T>>({
	register,
	name,
	error,
	options,
	...rest
}: Props<T, TName>) => {
	return (
		<div>
			<input
				{...register(name, options)}
				{...rest}
				className={styles.input}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}
