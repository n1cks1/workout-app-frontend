import { useEditWorkoutMutation } from "@features/edit-workout";
import { useWorkoutForm } from "@features/workout-form/model/useWorkoutForm";
import { WorkoutFormValues } from "@features/workout-form/";

export const useEditWorkout = (id: number) => {
  const { mutate, error, isPending, isSuccess } = useEditWorkoutMutation();
  const { register, handleSubmit, control, errors } = useWorkoutForm();

  const onSubmit = (data: WorkoutFormValues) => {
    mutate({
      id,
      body: {
        name: data.name,
        exerciseIds: data.exerciseIds.map((ex)  => ex.value)
      },
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    control,
    isSuccess,
    isPending,
    error,
    onSubmit,
  };
};
