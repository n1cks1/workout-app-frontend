import { Home } from '@pages/home'
import { NewExercise } from '@pages/new-exercise'
import { NewWorkout } from '@pages/new-workout'
import { Profile } from '@pages/profile'
// import SingleExercise from '@pages/single-exercise/SingleExercise'
import { ListWorkouts } from '@pages/list-workouts/ListWorkouts'
import { Workout } from '@pages/workout'
import {WorkoutLogs} from "@pages/workout-logs/WorkoutLogs";

export const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/new-workout',
		component: NewWorkout
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/new-exercise',

		component: NewExercise
	},

	{
		path: '/workout/:id',

		component: Workout
	},
	{
		path: '/workouts',

		component: ListWorkouts
	},
	{
		path: '/workouts/:name/:workoutId',
		component: WorkoutLogs
	}
	// {
	// 	path: '/exercise/:id',

	// 	component: SingleExercise
	// }
]
