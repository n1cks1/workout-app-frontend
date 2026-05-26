export type Workout = {
	createdAt: Date
	exercises: Exercise[]
	id: Number
	name: String
	updatedAt: Date
	WorkoutLogs: WorkoutLog[]
}

export type WorkoutLog = {
	createdAt: Date
	id: Number
	isCompleted: Boolean
	updatedAt: Date
	userId: Number
	workoutId: Number
}

export type Exercise = {
	id: Number
	createdAt: Date
	updatedAt: Date
	name: String
	times: Number
	iconPath: String
	exerciseLogId: Number
}
