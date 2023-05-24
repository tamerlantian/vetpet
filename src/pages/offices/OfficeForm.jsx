import React, { useEffect } from "react";
import { Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../components";
import useToastMsg from "../../hooks/useToastMsg";
import getDirtyFieldsData from "../../utils/getDirtyFieldsData";

const OfficeForm = ({ onClose, action, loading, defaultValues = {} }) => {
  const toastMsg = useToastMsg();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, dirtyFields },
  } = useForm({ defaultValues });

  useEffect(() => {
    setFocus("department");
  }, []);

  const onSubmit = async (data) => {
    try {
      if (Object.keys(defaultValues).length !== 0) {
        const dirtyFieldsData = getDirtyFieldsData(data, dirtyFields);
        await action({ data: dirtyFieldsData, id: defaultValues._id });
        toastMsg("Successfully edited", "success");
        onClose();
        return;
      }

      await action(data).unwrap();
      toastMsg("Successfully added", "success");
      reset();
      onClose();
    } catch (error) {
      if (error.status !== 409) {
        toastMsg("An error ocurred", "error");
      }
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormControl className="mt-5" isInvalid={errors?.department}>
        <FormLabel>Department</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="Valle del Cauca"
          {...register("department", { required: "Department is required" })}
        />
        <ErrorMessage
          error={errors?.department}
          message={errors?.department?.message}
        />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.city}>
        <FormLabel>City</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="Cali"
          {...register("city", { required: "City is required" })}
        />
        <ErrorMessage error={errors?.city} message={errors?.city?.message} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.address}>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="Calle 5 # 12b -5"
          {...register("address", { required: "Address is required" })}
        />
        <ErrorMessage
          error={errors?.address}
          message={errors?.address?.message}
        />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.phone}>
        <FormLabel>Phone</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="6697908"
          {...register("phone", { required: "Phone is required" })}
        />
        <ErrorMessage error={errors?.phone} message={errors?.phone?.message} />
      </FormControl>

      <div className="flex items-center justify-end mt-8 pb-4 gap-2">
        <Button
          isLoading={loading}
          isDisabled={Object.keys(errors).length !== 0}
          colorScheme="green"
          type="submit"
        >
          Add
        </Button>
        <Button onClick={onClose} variant="ghost">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default OfficeForm;
