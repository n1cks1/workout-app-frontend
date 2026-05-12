import { $axios } from '../../api'

const WORKOUT = '/workout'

class WorkoutService {
	getAll() {
		return $axios.get(WORKOUT)
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

export default new WorkoutService()
