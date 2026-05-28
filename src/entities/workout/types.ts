import {Exercise} from "@entities/exercise";
import {WorkoutLog} from "@entities/workout-log";

export type Workout = {
    id: number,
    createdAt: string,
    updatedAt: string,

    name: string,
    exercises: Exercise[]

    workoutLogs: WorkoutLog[]
}

export type Body = {
    name: string,
    exerciseIds: number[]
}

// model Workout {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now()) @map("created_at")
//     updatedAt DateTime @updatedAt @map("updated_at")
//
//     name      String
//     exercises Exercise[]
//
//     workoutLogs WorkoutLog[]
//
// @@map("workout")
// }