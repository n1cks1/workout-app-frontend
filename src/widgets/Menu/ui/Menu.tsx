import { useAuth } from "@app/providers/auth-provider";
import cn from "clsx";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import type { Props } from "../types";
import styles from "./Menu.module.scss";

export const Menu = ({ isShow, setIsShow, menu, menuType }: Props) => {
  const { setIsAuth } = useAuth();

  const logoutHandler = () => {
    Cookies.remove("notif");
    setIsAuth(false);
    setIsShow(false);
  };

  return (
    isShow && (
      <nav
        className={cn(styles.menu, {
          [styles.show]: isShow,
          [styles.default]: menuType === "default",
        })}
      >
        <ul>
          {menu.map((item, idx) =>
            item.type === "link" ? (
              <li key={`_menu_${idx}`}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  item.onClick();
                }}
                key={`menu_${idx}`}
              >
                {item.title}
              </button>
            ),
          )}
          {menuType === "profile" && (
            <li>
              <button
                onClick={() => {
                  logoutHandler();
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  );
};
