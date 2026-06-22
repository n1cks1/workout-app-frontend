import { Alert } from "@shared/ui/alert/ui/Alert";
import { Field } from "@shared/ui/field";
import { Loader } from "@shared/ui/loader";
import { Link } from "react-router-dom";
import { SelectExercise } from "./SelectExercise";
import { WorkoutFormProps } from "../types";

export const WorkoutForm = ({
  register,
  handleSubmit,
  errors,
  control,
  isSuccess,
  isPending,
  error,
  onSubmit,
}: WorkoutFormProps) => {
  return (
    <div>
      {isSuccess && <Alert type="success">Workout created</Alert>}

      {error && <Alert type="error">{error.message}</Alert>}

      {isPending && <Loader />}

      <form id="workout-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          placeholder="Enter name"
          name="name"
          type="text"
          register={register}
          error={errors?.name?.message}
          options={{
            required: "Name is required",
          }}
        />

        <Link to="/new-exercise" className="dark-link">
          Create new exercise
        </Link>

        <SelectExercise control={control} />
      </form>
    </div>
  );
};
