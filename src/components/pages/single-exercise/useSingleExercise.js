import ExerciseService from "@service/exercise/exercise.service";
import { useQuery } from "@tanstack/react-query";

export const useSingleExercise = (id) =>
  useQuery({
    queryKey: ["get single exercise"],
    queryFn: () => ExerciseService.getSingle(id).then((res) => res.data),
  });
