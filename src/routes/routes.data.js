import Home from "@components/pages/home/Home";
import NewExercise from "@components/pages/new-exercise/NewExercise";
import NewWorkout from "@components/pages/new-workout/NewWorkout";
import Profile from "@components/pages/profile/Profile";
import SingleExercise from "@components/pages/single-exercise/SingleExercise";
import Workout from "@components/pages/workout/Workout";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/new-workout",
    component: NewWorkout,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/new-exercise",

    component: NewExercise,
  },

  {
    path: "/workout/:id",

    component: Workout,
  },
  // {
  // 	path: '/workouts',
  //
  // 	component: ListWorkouts
  // },
  {
    path: "/exercise/:id",

    component: SingleExercise,
  },
];
