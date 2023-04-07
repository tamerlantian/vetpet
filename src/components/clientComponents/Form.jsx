import React from "react";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../../store";
import { FormSelect, Input } from "../";

const Form = ({ onClose }) => {
  const [addUser, results] = useAddUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    addUser(data);
    reset();
    onClose();
  };

  const inputStyle = "border rounded-md py-3 px-5";

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-6">
        <label className="mb-1" htmlFor="cedula">
          ID Card
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="cardId"
          register={register}
          error={errors.cardId}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="nombre">
          Name
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="name"
          register={register}
          error={errors.name}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="form-label" htmlFor="apellido">
          Lastname
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="lastname"
          register={register}
          error={errors.lastname}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="telefono">
          Phone
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="phone"
          register={register}
          error={errors.phone}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="correo">
          Email
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="email"
          register={register}
          error={errors.email}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3 mb-6">
        <label className="mb-1" htmlFor="role">
          Role
        </label>
        <FormSelect
          name="role"
          register={register}
          control={control}
          rules={{ required: true }}
          error={errors.role}
          errorMessage="This is a required field"
          options={[
            { value: "admin", label: "Admin" },
            { value: "client", label: "Client" },
            { value: "analyst", label: "Analyst" },
          ]}
        />
      </div>
      <div className="flex items-center justify-end py-2 gap-2">
        <Button colorScheme="green" type="submit">
          Add
        </Button>
        <Button onClick={onClose} variant="ghost">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default Form;
