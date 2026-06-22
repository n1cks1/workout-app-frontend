import cn from "clsx";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  clickHandler = null,
  size = "xl",
  type = "button",
  formId = "",
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={clickHandler}
        className={cn(styles.button, styles[size])}
        type={type}
        form={formId}
      >
        {children}
      </button>
    </div>
  );
};
