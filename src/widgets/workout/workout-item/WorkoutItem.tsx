import { Workout } from "@entities/workout";
import { createWorkoutSlug } from "@shared/lib/slug";
import { Menu } from "@widgets/Menu";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styles from "../styles.module.scss";
import { menu } from "./menu.data";
import { MdClose } from "react-icons/md";
import { useOnclickOutside } from "@shared/lib/useOnClickOutside";

type Props = {
  workout: Workout;
};

export const WorkoutItem = ({ workout }: Props) => {
  const { isShow, ref, setIsShow } = useOnclickOutside(false);

  const nav = useNavigate();
  return (
    <div className={styles.wrapper} ref={ref}>
      <div
        onClick={() => {
          nav(`/workouts/${createWorkoutSlug(workout.name)}/${workout.id}`);
        }}
        className={styles.workout}
      >
        {workout.name}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsShow(!isShow);
          }}
          className={styles.menu}
        >
          {isShow ? <MdClose /> : <CiMenuKebab />}
        </button>
        {isShow && (
          <div
            className={styles.overlay}
            onClick={(e) => {
              e.stopPropagation();
              setIsShow(false);
            }}
          ></div>
        )}
        <Menu
          isShow={isShow}
          menuType={"default"}
          menu={menu({ setIsShow, workoutId: workout.id })}
        />
      </div>
    </div>
  );
};
