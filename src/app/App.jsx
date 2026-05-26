import Router from '@app/router/Routes'

import { AuthProvider } from '@app/providers/auth-provider'

import { QueryProvider } from './providers/query-provider'

export const App = () => {
	return (
		<AuthProvider>
			<QueryProvider>
				<Router />
			</QueryProvider>
		</AuthProvider>
	)
}
