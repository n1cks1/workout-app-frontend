import { WorkoutLog } from '@entities/workout-log'
import { $axios } from '@shared/api'
import { WORKOUT } from '../../workoutPath'

const LOG = '/log'

class WorkoutLogService {
	//workout-log_id
	getSingle(id: number) {
		return $axios.get(`${WORKOUT}${LOG}/${id}`)
	}

	//workout_id
	async create(id: number): Promise<WorkoutLog> {
		const res = await $axios.post<WorkoutLog>(`${WORKOUT}${LOG}/${id}`)
		return res.data
	}

	//workout-log_id
	async complete(id: number, statusCompleted: boolean): Promise<WorkoutLog> {
		const res = await $axios.patch<WorkoutLog>(
			`${WORKOUT}${LOG}/complete/${id}`,
			{
				statusCompleted: statusCompleted
			}
		)
		return res.data
	}
}

export const workoutLogService = new WorkoutLogService()
