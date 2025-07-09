import { TextareaFieldProps } from "@/Types/TextareaFieldTypes";
import { Label } from "./Label";

export const TextareaField = ({
  id,
  label,
  name,
  placeholder,
  register,
  error,
  rules,
}: TextareaFieldProps) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <Label id={id} label={label} />

      <textarea
        id={id}
        placeholder={placeholder}
        rows={4}
        className="bg-gray-200 rounded-lg p-3 outline-gray-500"
        {...register(name, rules)}
      />

      {error && (
        <p className="bg-red-500/80 p-3 text-white rounded-lg text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
};
