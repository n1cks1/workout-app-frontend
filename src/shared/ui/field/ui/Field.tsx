import { InputHTMLAttributes } from 'react'
import type {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'
import styles from './Field.module.scss'

type Props<T extends FieldValues> = {
	register: UseFormRegister<T>
	name: Path<T>
	error?: string
	options?: RegisterOptions<T>
} & InputHTMLAttributes<HTMLInputElement>

export const Field = <T extends FieldValues>({
	register,
	name,
	error,
	options,
	...rest
}: Props<T>) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input
				{...register(name, options)}
				{...rest}
				className={styles.input}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}
