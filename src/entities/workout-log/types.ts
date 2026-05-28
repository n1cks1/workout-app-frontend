import {ExerciseLog} from "@entities/exercise-log";

export type WorkoutLog = {
    id: number,
    createdAt: string,

    updatedAt: string,
    isCompleted: boolean,
    exerciseLogs: ExerciseLog[]

    userId: number,

    workoutId: number
}

// model WorkoutLog {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now()) @map("created_at")
//     updatedAt DateTime @updatedAt @map("updated_at")
//
//     isCompleted  Boolean       @default(false) @map("is_completed")
//     exerciseLogs ExerciseLog[]
//
//     user      User?    @relation(fields: [userId], references: [id])
//     userId    Int?     @map("user_id")
//         workout   Workout? @relation(fields: [workoutId], references: [id])
//     workoutId Int?     @map("workout_id")
// }