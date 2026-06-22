import {Modal, useWorkoutModal} from "@shared/ui/modal";
import {use} from "react";
import {useDeleteWorkoutMutation} from "@features/delete-workout";

type Props = {
    name: string
}

export const DeleteWorkout = ({name}: Props) => {
    const id = useWorkoutModal(s => s.workoutId)
    const {mutate} = useDeleteWorkoutMutation()
    return (
        <Modal name={name} deleteHandler={() => {
            mutate({id})
        }}>
            Удалить тренировку?
        </Modal>
    )
}