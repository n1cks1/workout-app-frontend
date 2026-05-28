import { useQuery } from '@tanstack/react-query'
import {Workout, workoutService} from "@entities/workout";

export const useSingleWorkoutQuery = (id: number) =>
    useQuery<Workout>({
        queryKey: ['workout', id],
        queryFn: () => workoutService.getSingle(id),
        staleTime: 1000 * 60 * 5
    })
