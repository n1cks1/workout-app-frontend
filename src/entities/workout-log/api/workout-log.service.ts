import { $axios } from '@shared/api'
import { WORKOUT } from '../../workoutPath'
import {WorkoutLog} from "@entities/workout-log";

const LOG = '/log'

class WorkoutLogService {
	//workout-log_id
	getSingle(id: number) {
		return $axios.get(`${WORKOUT}${LOG}/${id}`)
	}

	//workout_id
	async create(id: number): Promise<WorkoutLog> {
		const res = await $axios.post<WorkoutLog>(`${WORKOUT}${LOG}/${id}`);
		return res.data;

	}

	//workout-log_id
	complete(id: number, statusCompleted: boolean) {
		console.log( { statusCompleted: statusCompleted } );
		return $axios.patch(`${WORKOUT}${LOG}/complete/${id}`, { statusCompleted: statusCompleted })
	}
}

export const workoutLogService = new WorkoutLogService()
