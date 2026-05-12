import Layout from '@components/layout/Layout'
import Loader from '@components/ui/Loader'
import Alert from '@components/ui/alert/Alert'
import Button from '@components/ui/button/Button'
import Field from '@components/ui/field/Field'
import ExerciseService from '@service/exercise/ExerciseService'
import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import styles from './NewExercise.module.scss'
import { getIconPath } from './getIconPath.util'

const data = ['back', 'biceps', 'chest', 'hit', 'legs', 'shoulders']

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isSuccess, error, isPending } = useMutation({
		mutationKey: ['create exercise'],
		mutationFn: body => ExerciseService.create(body),
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout
				heading="Create New Exercise"
				bgImage={'/images/new-exercise-bg.jpg'}
			/>
			<div className="wrapper-inner-page">
				{isSuccess && <Alert text={'Exercise created'} />}
				{error && (
					<Alert
						type={error}
						text={error}
					/>
				)}
				{isPending && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						placeholder="Enter name"
						name="name"
						type="text"
						register={register}
						error={errors?.name?.message}
						options={{
							required: 'Name is required'
						}}
					/>

					<Field
						placeholder="Times"
						name="times"
						type="text"
						register={register}
						error={errors?.times?.message}
						options={{
							required: 'Times is required number',
							valueAsNumber: true,
							validate: value => value > 0
						}}
					/>

					<Controller
						control={control}
						name="iconPath"
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}/${getIconPath(name)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => {
											onChange(getIconPath(name))
										}}
										height="45"
									/>
								))}
							</div>
						)}
					/>
					<Button handleSubmit={null}>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
