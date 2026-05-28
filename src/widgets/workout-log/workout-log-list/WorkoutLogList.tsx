import {WorkoutLogItem} from "@widgets/workout-log/workout-log-item";
import {useSingleWorkoutQuery} from "@entities/workout";
import {useParams} from "react-router-dom";

import styles from "./WorkoutLogList.module.scss";

export const WorkoutLogList = () => {
    const { workoutId } = useParams()
    const { workoutLogs } = useSingleWorkoutQuery(Number(workoutId)).data //workout logs inside
    return (
        <>
            <div className={styles.wrapper}>
            {workoutLogs.map((log) => (
                <WorkoutLogItem
                    key={log.id}
                    workoutLog={log} />
            ))}
            </div>
        </>
    )
}