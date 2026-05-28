import { $axios } from '@shared/api'
import { WORKOUT } from '../../workoutPath'
import {Workout} from "@entities/workout";

class WorkoutService {
	async getAll(): Promise<Workout[]> {
		const res = await $axios.get<Workout[]>(WORKOUT)

		return res.data
	}

	async getSingle(id: number): Promise<Workout> {
		const res = await $axios.get<Workout>(`${WORKOUT}/${id}`)
		return res.data
	}

	async create(body: Body): Promise<Workout> {
		const res = await $axios.post<Workout>(WORKOUT, body)

		return res.data
	}

	async update(id: number, body: Body): Promise<Workout> {
		const res = await $axios.put(`${WORKOUT}/${id}`, body)

		return res.data
	}

	delete(id: number) {
		return $axios.delete(`${WORKOUT}/${id}`)
	}
}

export const workoutService = new WorkoutService()
