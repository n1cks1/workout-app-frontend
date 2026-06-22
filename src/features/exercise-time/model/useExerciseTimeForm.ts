import { TBodyUpdateTime } from '@entities/exercise-log'
import { useExerciseLogQuery } from '@entities/exercise-log/model/useExerciseLogQuery'
import { useExerciseTimeMutation } from '@features/exercise-time/model/useExerciseTimeMutation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { MutationProps } from '../types'

export const useExerciseTimeForm = (timeId: number) => {
	const { mutate } = useExerciseTimeMutation()
	const { id } = useParams()
	const { data } = useExerciseLogQuery(Number(id))

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TBodyUpdateTime>({
		mode: 'onChange',
		defaultValues: {
			repeat: 0,
			weight: 0
		}
	})

	useEffect(() => {
		if (data) {
			const time = data?.times?.find(time => time.id === timeId)
			if (time) {
				reset({
					repeat: time.repeat,
					weight: time.weight
				})
			}
		}
	}, [data])

	const updateExerciseTime = ({ body, timeId }: MutationProps) => {
		mutate({
			body,
			timeId
		})
	}

	const onSubmit = (data: TBodyUpdateTime) => {
		updateExerciseTime({
			body: {
				...data,
				isCompleted: data.weight > 0 && data.repeat > 0
			},
			timeId: Number(timeId)
		})
	}

	return { onSubmit, register, handleSubmit, errors }
}
