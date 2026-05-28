import {useCreateWorkoutLogMutation} from "@features/workout-log/new-workout-log";

export const useCreateWorkoutLog = () => {
    const { mutate, data, isPending } = useCreateWorkoutLogMutation()

    const createWorkoutLog = (id: number) => {
        mutate(id)
    }

    return {
        createWorkoutLog,
        data,
        isPending
    }
}