import { userService } from '@entities/user'
import { useQuery } from '@tanstack/react-query'

export const useProfileQuery = () => {
	return useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		select: ({ data }) => data
	})
}
