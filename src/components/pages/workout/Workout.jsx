import Layout from "@components/layout/Layout";
import Loader from "@components/ui/Loader";
import { useParams } from "react-router-dom";
import ExerciseItem from "./ExerciseItem";
import { Fragment } from "react";
import { getWorkoutLog } from "./useSingleWorkout";
import styles from "./Workout.module.scss";

const Workout = () => {
  const { id } = useParams(); //wokrout-log-id

  const isTrue = true;
  const { data, isPending, isError, error } = getWorkoutLog(id);

  if (isPending) {
    return (
      <>
        <Layout bgImage="/images/workout-bg.jpg" heading={<Loader />} />
        <div className="wrapper-inner-page">
          <Loader />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Layout bgImage="/images/workout-bg.jpg" heading="Упс.." />
        <div className="wrapper-inner-page">
          Что-то пошло не так, попробуйте перезагрузить страницу
        </div>
      </>
    );
  }

  return (
    <>
      <Layout bgImage="/images/workout-bg.jpg" heading={data?.workout?.name} />
      <div className="wrapper-inner-page">
        <div className={styles.wrapper}>
          {data?.exerciseLogs?.map((exerciseLog) => (
            <ExerciseItem
              key={exerciseLog.id}
              exerciseLog={exerciseLog}
              isPending={isPending}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Workout;
