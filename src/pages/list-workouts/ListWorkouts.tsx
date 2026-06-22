import {useListWorkoutsQuery} from "@entities/workout/";
import styles from "./ListWorkouts.module.scss";
import {Alert} from "@shared/ui/alert";
import {Loader} from "@shared/ui/loader";
import {Layout} from "@widgets/Layout";
import {WorkoutItem} from "@widgets/workout/workout-item/WorkoutItem";
import {Fragment} from "react/jsx-runtime";
import {EditWorkout} from "@widgets/workout/edit-workout/EditWorkout";
import {useWorkoutModal} from "@shared/ui/modal";
import {DeleteWorkout} from "@widgets/workout/delete-workout";

const modalMap = {
    edit: EditWorkout,
    delete: DeleteWorkout
} as const

export const ListWorkouts = () => {
    const modal = useWorkoutModal();
    const {data, isPending, isError} = useListWorkoutsQuery();

    const Component = modalMap[modal.type]

    if (isPending) {
        return (
            <div className="wrapper-inner-page">
                <Loader/>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="wrapper-inner-page">
                <Alert type="error">
                    Что-то пошло не так, попробуйте перезагрузить страницу
                </Alert>
            </div>
        );
    }

    return (
        <>
            <Layout bgImage="/images/new-exercise-bg.jpg" heading="list workouts"/>
            <div className="wrapper-inner-page">
                <div className={styles.items}>
                    {
                        modal.isOpen ? <Component name={`${modal.type} workout`} /> : null
                    }
                    {data.map((workout) => (
                        <Fragment key={workout.id}>
                            <WorkoutItem workout={workout}/>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};
