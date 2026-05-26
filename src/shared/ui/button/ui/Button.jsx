import cn from 'clsx'
import styles from './Button.module.scss'

export const Button = ({ children, clickHandler, size = 'xl' }) => {
	return (
		<div className={styles.wrapper}>
			<button
				onClick={clickHandler}
				className={cn(styles.button, styles[size])}
			>
				{children}
			</button>
		</div>
	)
}
