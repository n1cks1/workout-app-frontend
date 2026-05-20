import WorkoutService from "@service/workout/WorkoutService";
import { useQuery } from "@tanstack/react-query";

export const useSingleWorkout = (id) =>
  useQuery({
    queryKey: ["get workout"],
    queryFn: () => WorkoutService.getSingle(id).then((res) => res.data),
  });

export const useAllWorkouts = () =>
  useQuery({
    queryKey: ["get workouts"],
    queryFn: () => WorkoutService.getAll().then((res) => res.data),
  });
