import {Exercise} from "@entities/exercise";

export type ExerciseLog = {
    id: number,
    createdAt: string,
    updatedAt: string,

    isCompleted: boolean,
    times: ExerciseTime[],
    userId: number,
    exercise: Exercise[]

    workoutLogId: number
}

type ExerciseTime = {
    id: number,
    createdAt: string,
    updatedAt: string,

    weight: number,
    repeat: number,
    isCompleted: boolean,

    exerciseLogId: number
}

// model ExerciseLog {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now()) @map("created_at")
//     updatedAt DateTime @updatedAt @map("updated_at")
//
//     isCompleted Boolean        @default(false) @map("is_completed")
//     times       ExerciseTime[]
//     user        User?          @relation(fields: [userId], references: [id])
//
//     userId       Int?        @map("user_id")
//         exercise     Exercise[]
//     workoutLog   WorkoutLog? @relation(fields: [workoutLogId], references: [id])
//     workoutLogId Int?        @map("workout_log_id")
//
//     @@map("exercise_log")
// }

// model ExerciseTime {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now()) @map("created_at")
//     updatedAt DateTime @updatedAt @map("updated_at")
//
//     weight      Int     @default(0)
//     repeat      Int     @default(0)
//     isCompleted Boolean @default(false) @map("is_completed")
//
//     exerciseLog   ExerciseLog? @relation(fields: [exerciseLogId], references: [id])
//     exerciseLogId Int?         @map("exercise_log_id")
//
//     @@map("exercise_time")
// }