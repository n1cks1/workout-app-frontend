import { $axios } from '../api'

class UserService {
	getProfile() {
		return $axios.get('/users/profile')
	}
}

export default new UserService()
