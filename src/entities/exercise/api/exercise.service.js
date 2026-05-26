import { $axios } from '@shared/api'
import { EXERCISES } from '../../exercisesPath'

class ExerciseService {
	getAll() {
		return $axios.get(`${EXERCISES}/`)
	}

	getSingle(id) {
		return $axios.get(`${EXERCISES}/${id}`)
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

export const exerciseService = new ExerciseService()
