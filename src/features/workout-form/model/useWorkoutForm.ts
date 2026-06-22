import { useForm } from "react-hook-form";
import { WorkoutFormValues } from "../types";

export const useWorkoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<WorkoutFormValues>({
    mode: "onChange",
  });

  return {
    register,
    handleSubmit,
    control,
    errors,
    reset,
  };
};
