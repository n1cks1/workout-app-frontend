import {useMutation, useQueryClient} from "@tanstack/react-query";
import { workoutLogService} from "@entities/workout-log";

export const useCreateWorkoutLogMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (workoutId: number) => workoutLogService.create(workoutId),
        onSuccess: async (_, workoutId) => {
            await queryClient.invalidateQueries({
                queryKey: ['workout', workoutId]
            })
        }

    })
}

