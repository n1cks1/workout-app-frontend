import { $axios } from '@shared/api'
import { WORKOUT } from '../../workoutPath'

class WorkoutService {
	async getAll() {
		const res = await $axios.get(WORKOUT)

		return res.data
	}

	getSingle(id) {
		return $axios.get(`${WORKOUT}/${id}`)
	}

	create(body) {
		const { data } = $axios.post(WORKOUT, body)

		return data
	}

	update(id, body) {
		return $axios.put(`${WORKOUT}/${id}`, body)
	}

	delete(id) {
		return $axios.delete(`${WORKOUT}/${id}`)
	}
}

export const workoutService = new WorkoutService()
