import Header from '@components/layout/header/Header'
import styles from '@components/layout/Layout.module.scss'
import cn from 'clsx'
import * as React from 'react'

type Layout = {
	children?: React.ReactNode
	bgImage: string
	heading?: String
}

const Layout = ({ children, bgImage, heading = '' }: Layout) => {
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

export default Layout
