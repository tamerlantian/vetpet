import React from "react";
import { useEditOfficeMutation } from "../../store";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../";

const EditOfficeForm = ({ officeData, onClose }) => {
  const [editOffice, results] = useEditOfficeMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: officeData.data.id,
      department: officeData.data.department,
      city: officeData.data.city,
      address: officeData.data.address,
      phone: officeData.data.phone,
    },
  });

  const inputStyle = "border rounded-md py-3 px-5";

  const onSubmit = (data) => {
    editOffice(data);
    reset();
    onClose();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-6">
        <label className="mb-1" htmlFor="cedula">
          Department
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="department"
          register={register}
          error={errors.department}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="form-label" htmlFor="apellido">
          City
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="city"
          register={register}
          error={errors.city}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="form-label" htmlFor="apellido">
          Address
        </label>
        <Input
          typeName="text"
          classname={inputStyle}
          name="address"
          register={register}
          error={errors.address}
          errorMessage="This is a required field"
        />
      </div>

      <div className="flex flex-col mt-3">
        <label className="form-label" htmlFor="apellido">
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

      <div className="flex items-center justify-end py-2 gap-2">
        <Button colorScheme="green" type="submit">
          Save
        </Button>
        <Button onClick={onClose} variant="ghost">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditOfficeForm;
