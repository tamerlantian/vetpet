import React from "react";
import { useAddProductMutation } from "../../store";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormSelect, Input } from "../";

const AddProductForm = ({ onClose }) => {
  const [addProduct, results] = useAddProductMutation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const inputStyle = "border rounded-md py-3 px-5";

  const onSubmit = (data) => {
    data.price = parseInt(data.price);
    addProduct(data);
    reset();
    onClose();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="role">
          Type
        </label>
        <FormSelect
          name="type"
          register={register}
          control={control}
          rules={{ required: true }}
          error={errors.type}
          errorMessage="This is a required field"
          options={[
            { value: "service", label: "Service" },
            { value: "product", label: "Product" },
          ]}
        />
      </div>

      <div className="flex flex-col mt-6">
        <label className="mb-1" htmlFor="cedula">
          Product name
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

export default AddProductForm;
