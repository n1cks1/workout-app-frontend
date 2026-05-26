import Cookies from 'js-cookie'
import { $axios } from '../../../shared/api/axios/api.js'

class AuthService {
	async main(type, email, password) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, { email, password })

			if (data.token) {
				Cookies.set('notif', data.token)
			}

			return data
		} catch (error) {
			console.error(error)
			throw error
		}
	}
}

export default new AuthService()
