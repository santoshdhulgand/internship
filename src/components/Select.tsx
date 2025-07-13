import React from "react";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: ReadonlyArray<Option>;
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <select
        className={`input-field ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
