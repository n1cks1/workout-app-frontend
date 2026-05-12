import Loader from '@components/ui/Loader'
import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { useListExercises } from './useListExercises'

const SelectExercises = ({ control }) => {
	const { data, isPending } = useListExercises()

	if (isPending) return <Loader />

	return (
		<>
			<Controller
				control={control}
				name="exerciseIds"
				render={({ field: { value, onChange } }) => (
					<ReactSelect
						classNamePrefix="select2-selection"
						isMulti
						placeholder="Exercises.."
						options={data?.map(exercise => ({
							value: exercise.id,
							label: exercise.name
						}))}
						value={value}
						onChange={onChange}
					/>
				)}
			/>
		</>
	)
}

export default SelectExercises
