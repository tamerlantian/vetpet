import React from "react";

const Input = ({
  name,
  typeName,
  classname,
  register,
  error,
  errorMessage,
}) => {
  return (
    <>
      <input
        type={typeName}
        className={classname}
        {...register(name, { max: 10, min: 8 })}
      />
      {error && <p className="text-red-600">{errorMessage}</p>}
    </>
  );
};

export default Input;
