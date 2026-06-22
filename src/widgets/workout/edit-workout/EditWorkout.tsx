import { useEditWorkout } from "@features/edit-workout/model/useEditWorkout";
import { WorkoutForm } from "@features/workout-form";
import { Modal, useWorkoutModal } from "@shared/ui/modal";

type Props = {
  name: string;
};

export const EditWorkout = ({ name }: Props) => {
  const modal = useWorkoutModal();
  const form = useEditWorkout(modal.workoutId);
  return (
    <>
      <Modal name={name}>
        <WorkoutForm { ...form } />
      </Modal>
    </>
  );
};
