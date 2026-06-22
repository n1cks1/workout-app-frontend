import { Loader } from "@shared/ui/loader";
import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { useListExercises } from "../model/useListExercises";

export const SelectExercise = ({ control }) => {
  const { data, isLoading } = useListExercises();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <>
        <Controller
          control={control}
          name="exerciseIds"
          render={({ field: { value, onChange } }) => (
            <ReactSelect
              classNamePrefix="select2-selection"
              isMulti
              placeholder="Exercises.."
              options={data?.map((exercise) => ({
                value: exercise.id,
                label: exercise.name,
              }))}
              value={value}
              onChange={onChange}
            />
          )}
        />
      </>
    </div>
  );
};
