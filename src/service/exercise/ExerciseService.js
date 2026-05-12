import { $axios } from '../../api'

const EXERCISES = '/exercises'

class ExerciseService {
	getAll() {
		return $axios.get(`${EXERCISES}/`)
	}

	create(body) {
		return $axios.post(`${EXERCISES}/`, body)
	}

	update(body, id) {
		return $axios.put(`${EXERCISES}/${id}`, body)
	}

	delete(id) {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
