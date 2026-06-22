import cn from "clsx";

import { ReactNode } from "react";
import styles from "./Alert.module.scss";

type Props = {
  type: keyof typeof styles;
  children?: ReactNode;
};

export const Alert = ({ type = "success", children }: Props) => {
  return <div className={cn(styles.alert, styles[type])}>{children}</div>;
};
