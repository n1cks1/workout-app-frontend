import { Exercise } from '@entities/exercise'

export type TExerciseLog = {
	id: number
	createdAt: string
	updatedAt: string

	isCompleted: boolean
	times: TExerciseTime[]
	userId: number
	exercise: Exercise[]

	workoutLogId: number
}

export type TExerciseTime = {
	id: number
	createdAt: string
	updatedAt: string

	weight: number
	repeat: number
	isCompleted: boolean

	exerciseLogId: number | null
}

export type TBodyUpdateTime = {
	weight: number
	repeat: number
	isCompleted: boolean
}

// model ExerciseLog {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now()) @map("created_at")
//     updatedAt DateTime @updatedAt @map("updated_at")
//
//     isCompleted Boolean        @default(false) @map("is_completed")
//     times       exercise-time[]
//     user        User?          @relation(fields: [userId], references: [id])
//
//     userId       Int?        @map("user_id")
//         exercise     Exercise[]
//     workoutLog   WorkoutLog? @relation(fields: [workoutLogId], references: [id])
//     workoutLogId Int?        @map("workout_log_id")
//
//     @@map("exercise_log")
// }

// model exercise-time {
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
