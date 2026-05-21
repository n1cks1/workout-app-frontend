import workoutLogService from "@service/workout/workout-log.service";
import { useQuery } from "@tanstack/react-query";

export const getWorkoutLog = (id) =>
  useQuery({
    queryKey: ["get workout log"],
    queryFn: () => workoutLogService.getSingle(id),
    select: ({ data }) => data,
  });
