import React from "react";
import { useAddPlanMutation } from "../../store";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {  Input } from "../";

const AddPlanForm = ({ onClose }) => {
  const [addPlan, results] = useAddPlanMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const inputStyle = "border rounded-md py-3 px-5";

  const onSubmit = (data) => {
    data.price = parseInt(data.price);
    addPlan(data);
    reset();
    onClose();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-6">
        <label className="mb-1" htmlFor="cedula">
          Plan name
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
          Price
        </label>
        <Input
          typeName="number"
          classname={inputStyle}
          name="price"
          register={register}
          error={errors.price}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="nombre">
          Description
        </label>
        <textarea
          {...register("description")}
          className="border rounded-md p-2"
          rows="4"
          cols="50"
        ></textarea>
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

export default AddPlanForm;
