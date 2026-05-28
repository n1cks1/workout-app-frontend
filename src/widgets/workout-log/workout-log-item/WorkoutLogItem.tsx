import {WorkoutLog} from "@entities/workout-log";
import {useFormatDate} from "@shared/lib/format-date";
import styles from './WorkoutLogItem.module.scss'

import { MdDone } from "react-icons/md";
import {useUpdateWorkoutLog} from "@features/workout-log/update-workout-log";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
    workoutLog: WorkoutLog;
}

export const WorkoutLogItem = ({ workoutLog }: Props) => {
    const formattedDate = useFormatDate(workoutLog.createdAt);
    const { updateWorkoutLog } = useUpdateWorkoutLog();

    const isCompleted = workoutLog.isCompleted


    return (
        <div className={styles.wrapper}>
            {formattedDate}

            <div className={styles.status}>
                <p>{workoutLog.isCompleted ? 'Выполнено' : 'Не выполнено'}</p>

                <button
                    className={styles.blockIconChange}
                    onClick={() => updateWorkoutLog(workoutLog.id, workoutLog.workoutId, !isCompleted)}
                >
                    {isCompleted ?
                    <MdOutlineCancel className={styles.iconChange}/> :
                    <MdDone className={styles.iconChange}/>
                }
                </button>
            </div>
        </div>
    )
}