export const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className="text-lg text-gray-600 font-medium">
      {label}
      <span className="text-red-500 ml-1">*</span>
    </label>
  );
};
