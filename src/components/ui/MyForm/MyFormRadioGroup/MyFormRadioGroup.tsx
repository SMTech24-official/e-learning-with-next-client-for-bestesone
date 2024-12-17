import { Controller, useFormContext } from "react-hook-form";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioButtonGroupProps {
  name: string;
  options: RadioOption[];
  label: string;
}

const MyFormRadioGroup = ({ name, options, label  }: RadioButtonGroupProps) => {
  const { control } = useFormContext();

  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">{label}</h3>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Please select an option" }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <div className="space-y-3">
              {options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={option.value} className="text-gray-700">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            {/* Display error message if validation fails */}
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormRadioGroup;
