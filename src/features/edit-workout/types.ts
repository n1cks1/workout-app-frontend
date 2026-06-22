import { WorkoutFormValues } from "@features/workout-form";

type Body = {
  name: string,
  exerciseIds: number[]
}

export type MutationProps = {
  id: number;
  body: Body,
};
