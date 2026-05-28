import {Workout} from "@entities/workout";

export type Exercise = {
    id: number,
    createdAt: string,
    updatedAt: string,

    name: string,
    times: number,
    iconPath: string,

    workouts: Workout[]

    exerciseLogId: number

}

// model Exercise {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now()) @map("created_at")
//     updatedAt DateTime @updatedAt @map("updated_at")
//
//     name     String
//     times    Int
//     iconPath String @map("icon_path")
//
//     workouts Workout[]
//
//     exerciseLog   ExerciseLog? @relation(fields: [exerciseLogId], references: [id])
//     exerciseLogId Int?         @map("exercise_log_id")
//
//     @@map("exercise")
// }