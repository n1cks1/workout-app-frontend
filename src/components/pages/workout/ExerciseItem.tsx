import Loader from "@components/ui/Loader";
import styles from "./Workout.module.scss";
import { useNavigate } from "react-router-dom";

const ExerciseItem = ({ exerciseLog, isPending }) => {
  if (isPending) return <Loader />;
  const nav = useNavigate();
  const exercise = exerciseLog.exercise[0];

  return (
    <>
      <button
        className={styles.exercise}
        onClick={() => {
          nav(`/exercise/${exercise.exerciseLogId}`);
        }}
      >
        {exercise.name}

        <img
          src={`${import.meta.env.VITE_SERVER_URL}/${exercise.iconPath}`}
          draggable="false"
        />
      </button>
    </>
  );
};
export default ExerciseItem;
