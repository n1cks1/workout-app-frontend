import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:3000/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('notif') ? `Bearer ${Cookies.get('notif')}` : ''
	}
})

$axios.interceptors.request.use(config => {
	const token = Cookies.get('notif')

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})
