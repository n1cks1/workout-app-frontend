import Layout from "@components/layout/Layout";
import Loader from "@components/ui/Loader";
import styles from "./Workout.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import WorkoutService from "@service/workout/WorkoutService";

const Workout = () => {
  const workoutId = useParams().id;
  console.log(workoutId);
  const { data, isPending, error } = useQuery({
    queryKey: ["get workout"],
    queryFn: () => WorkoutService.getSingle(workoutId).then((res) => res.data),
  });
  console.log(data);
  return (
    <>
      <Layout
        bgImage="/images/workout-bg.jpg"
        heading={isPending ? <Loader /> : data.name} //workout name
      />

      <div className="wrapper-inner-page">
        {isPending ? (
          <Loader />
        ) : (
          data?.exercises?.map((item, idx) => (
            <div key={`id_${idx}`} className={styles.exercise}>
              <p>{item.name}</p>
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/${item.iconPath}`}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Workout;
