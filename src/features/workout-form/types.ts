import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  Control,
  SubmitHandler,
} from "react-hook-form";

type ExerciseIds = {
  label: string,
  value: number
}

export type WorkoutFormValues = {
  name: string;
  exerciseIds: ExerciseIds[];
};

export type WorkoutFormProps = {
  register: UseFormRegister<WorkoutFormValues>;
  handleSubmit: UseFormHandleSubmit<WorkoutFormValues>;
  errors: FieldErrors<WorkoutFormValues>;
  control: Control<WorkoutFormValues>;
  isSuccess: boolean;
  isPending: boolean;
  error: Error;
  onSubmit: SubmitHandler<WorkoutFormValues>;
};
