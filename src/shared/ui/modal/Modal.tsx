import {Button} from "@shared/ui/button";
import {ReactNode} from "react";
import styles from "./Modal.module.scss";
import {useWorkoutModal} from "./model/store";
import {useOnclickOutside} from "@shared/lib/useOnClickOutside";

type Props = {
    children?: ReactNode;
    name: string;
    deleteHandler?: () => void
};

export const Modal = ({children, name, deleteHandler}: Props) => {
    const modal = useWorkoutModal();
    const {isShow, ref, setIsShow} = useOnclickOutside(false);

    return (
        <>
            {isShow && (
                <div
                    className={styles.overlay}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsShow(false);
                    }}
                ></div>
            )}
            <div ref={ref} className={styles.wrapper}>
                <div>{name}</div>
                {/* иконка закрытия */}
                <div>{children}</div>
                <div className={styles.buttons}>
                    <Button
                        clickHandler={() => {
                            modal.setClose();
                        }}
                    >
                        Отменить
                    </Button>
                    {modal.type === 'delete' ? <Button clickHandler={() => deleteHandler()}>
                            Подтвердить
                        </Button> :
                        <Button formId="workout-form" type="submit">
                            Подтвердить
                        </Button>
                    }
                </div>
            </div>
        </>
    );
};
