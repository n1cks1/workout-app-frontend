import { create } from "zustand";

type ModalType = "edit" | "delete" | null;

type ModalStore = {
  isOpen: boolean;
  type: ModalType;
  workoutId: number | null;

  setOpen: (type: Exclude<ModalType, null>, workoutId: number) => void;

  setClose: () => void;
};

export const useWorkoutModal = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  workoutId: null,

  setOpen: (type, workoutId) =>
    set({
      isOpen: true,
      type,
      workoutId,
    }),

  setClose: () =>
    set({
      isOpen: false,
      type: null,
      workoutId: null,
    }),
}));
