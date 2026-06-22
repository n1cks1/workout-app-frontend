import {Workout, workoutService} from "@entities/workout";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import type {MutationProps} from "../types";

type Context = {
    prevWorkout: Workout,
    prevWorkouts: Workout[],
}

export const useEditWorkoutMutation = () => {
    const queryClient = useQueryClient()

    const {mutate, isPending, error, isSuccess} = useMutation<Workout, Error, MutationProps, Context>
    ({
        mutationFn: ({id, body}) =>
             workoutService.update(id, body),

        onMutate: async ({id, body}) => {
            await queryClient.cancelQueries({
                queryKey: ['workout', id]
            })

            const prevWorkout = queryClient.getQueryData<Workout>(['workout', id]);
            const prevWorkouts = queryClient.getQueryData<Workout[]>(['workouts'])

            queryClient.setQueryData<Workout>(['workout', id], (old) => {
                if (!old) return old

                return {
                    ...old,
                    name: body.name,
                }
            })

            queryClient.setQueryData<Workout[]>(['workouts'], (old = []) => (
                old.map(workout => workout.id === id ? { ...workout, ...body } : workout)
            ))


            return {prevWorkout, prevWorkouts}

        },

        onError: (_err, {id}, context) => {
            queryClient.setQueryData(['workout', id], context?.prevWorkout)
            queryClient.setQueryData(['workouts'], context.prevWorkouts)

        }

    });

    return {mutate, isPending, error, isSuccess};
}
