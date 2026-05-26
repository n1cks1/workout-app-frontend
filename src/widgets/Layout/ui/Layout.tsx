import { Header } from '@widgets/header/ui'
import cn from 'clsx'
import * as React from 'react'
import styles from './Layout.module.scss'

type Layout = {
	children?: React.ReactNode
	bgImage: string
	heading?: String
}

export const Layout = ({ children, bgImage, heading = '' }: Layout) => {
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && <div>{children}</div>}
		</section>
	)
}
