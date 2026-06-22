import {useMutation, useQueryClient} from "@tanstack/react-query";
import {workoutService} from "@entities/workout";
import {useWorkoutModal} from "@shared/ui/modal";

export const useDeleteWorkoutMutation = () => {
    const queryClient = useQueryClient();
    const closeModal = useWorkoutModal(s => s.setClose)

    const { mutate } = useMutation({
        mutationFn: ({id}: { id: number }) => workoutService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['workouts']})
            closeModal()
         }
    })

    return { mutate }

}