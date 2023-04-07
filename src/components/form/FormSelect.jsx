import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const FormSelect = ({
  name,
  control,
  rules,
  options,
  errorMessage,
  error,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return <Select {...field} options={options} />;
        }}
      />
      {error && <p className="text-red-600">{errorMessage}</p>}
    </>
  );
};

export default FormSelect;
