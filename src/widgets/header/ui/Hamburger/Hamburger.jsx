import { useOnclickOutside } from '@shared/lib/useOnClickOutside'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { Menu } from '../Menu/Menu'
import styles from './Hamburger.module.scss'

export const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnclickOutside(false)

	return (
		<div
			className={styles.wrapper}
			ref={ref}
		>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				{isShow ? (
					<MdClose className={styles.menuButtonIcon} />
				) : (
					<HiOutlineMenuAlt3 className={styles.menuButtonIcon} />
				)}
			</button>
			<Menu
				isShow={isShow}
				setIsShow={setIsShow}
			/>
		</div>
	)
}
