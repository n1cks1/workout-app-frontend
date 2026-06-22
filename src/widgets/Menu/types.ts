export type TMenu = {
  type: "link" | "action";
  title: string;
  link?: string;
  onClick?: () => void;
};

export type Props = {
  isShow: boolean;
  setIsShow?: (isShow: boolean) => void;
  menu: TMenu[];
  menuType: "profile" | "default";
};
