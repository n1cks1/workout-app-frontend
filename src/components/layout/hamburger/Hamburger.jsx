import styles from '@components/layout/hamburger/Hamburger.module.scss'
import Menu from '@components/layout/hamburger/Menu'
import { useOnclickOutside } from '@hooks/useOnClickOutside'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const Hamburger = () => {
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
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
