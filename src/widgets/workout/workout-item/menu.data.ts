import { useWorkoutModal } from "@shared/ui/modal";
import { TMenu } from "@widgets/Menu";
import { Dispatch } from "react";
type Props = {
  workoutId: number;
  setIsShow: Dispatch<any>;
};

export const menu = ({ setIsShow, workoutId }: Props) => {
  const modal = useWorkoutModal((state) => state);
  return [
    {
      type: "action",
      title: "Изменить",
      onClick: () => {
        setIsShow(false);
        modal.setOpen("edit", workoutId);
      },
    },
    {
      type: "action",
      title: "Удалить",
      onClick: () => {
        setIsShow(false);
        modal.setOpen("delete", workoutId);
      },
    },
  ] satisfies TMenu[];
};
