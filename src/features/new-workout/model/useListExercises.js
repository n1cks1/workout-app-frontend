import { exerciseService } from '@entities/exercise'
import { useQuery } from '@tanstack/react-query'

export const useListExercises = () =>
	useQuery({
		queryKey: ['list exercises'],
		queryFn: () => exerciseService.getAll().then(res => res.data)
	})
