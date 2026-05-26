import { $axios } from '@shared/api'

class UserService {
	getProfile() {
		return $axios.get('/users/profile')
	}
}

export const userService = new UserService()
