import {Layout} from "@widgets/Layout";


import {useParams} from "react-router-dom";
import {useSingleWorkoutQuery} from "@entities/workout";
import {Button} from "@shared/ui/button";
import {useCreateWorkoutLog} from "@features/workout-log/new-workout-log";

import {Loader} from "@shared/ui/loader";
import {WorkoutLogList} from "@widgets/workout-log/workout-log-list";


export const WorkoutLogs = () => {

    const { workoutId } = useParams()

    const { createWorkoutLog } = useCreateWorkoutLog()
    const { data, isPending } = useSingleWorkoutQuery(Number(workoutId))


    if (isPending) {
        return (
            <Layout bgImage='images/new-exercise-bg.jpg'
                    heading={<Loader />}
                    />
        )
    }

    return (
        <>
            <Layout
                bgImage='/images/new-exercise-bg.jpg'
                heading={data.name}
            />

            <div className='wrapper-inner-page'>
                <WorkoutLogList />
                <div style={{ position: 'absolute', bottom: '0px' }}>
                    <Button clickHandler={()=> createWorkoutLog(Number(workoutId))}>Создать тренировку</Button>
                </div>
            </div>
        </>

    )
}
