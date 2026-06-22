import {
	TBodyUpdateTime,
	TExerciseLog,
	TExerciseTime
} from '@entities/exercise-log'
import { $axios } from '@shared/api'
import { EXERCISES } from '../../exercisesPath'

const LOG = `/log`

class ExerciseLogService {
	async getSingle(id: number): Promise<TExerciseLog> {
		const res = await $axios.get<TExerciseLog>(`${EXERCISES}${LOG}/${id}`)

		return res.data
	}

	async create(id: number): Promise<TExerciseLog> {
		const res = await $axios.post<TExerciseLog>(`${EXERCISES}/${LOG}/${id}`)
		return res.data
	}

	async complete(id: number, isCompleted: boolean): Promise<TExerciseLog> {
		const res = await $axios.patch(`${EXERCISES}${LOG}/${id}`, { isCompleted })
		return res.data
	}

	async updateTime(
		body: TBodyUpdateTime,
		timeId: number
	): Promise<TExerciseTime> {
		const res = await $axios.put<TExerciseTime>(
			`${EXERCISES}${LOG}/time/${timeId}`,
			body
		)
		return res.data
	}
}

export const exerciseLogService = new ExerciseLogService()
