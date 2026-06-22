import { useNewWorkoutForm } from "@features/new-workout/model/useNewWorkoutForm";
import { WorkoutForm } from "@features/workout-form/ui/WorkoutForm";
import { Layout } from "@widgets/Layout";
import {Button} from "@shared/ui/button";
import {useParams} from "react-router-dom";

export const NewWorkout = () => {
  const form = useNewWorkoutForm();

  return (
    <>
      <Layout
        heading="Create New Workout"
        bgImage={"/images/new-exercise-bg.jpg"}
      />

      <div className="wrapper-inner-page">
        <WorkoutForm {...form} />
          <Button type='submit' formId='workout-form'>Создать</Button>
      </div>
    </>
  );
};
