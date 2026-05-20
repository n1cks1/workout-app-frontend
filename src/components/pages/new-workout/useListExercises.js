import ExerciseService from "@service/exercise/exercise.service";
import { useQuery } from "@tanstack/react-query";

export const useListExercises = () =>
  useQuery({
    queryKey: ["list exercises"],
    queryFn: () => ExerciseService.getAll().then((res) => res.data),
  });
