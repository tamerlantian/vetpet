import React, { useEffect } from "react";
import { Button, Input, FormControl, FormLabel, Select as CSelect } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage, Select } from "../../components";
import useToastMsg from "../../hooks/useToastMsg";
import getDirtyFieldsData from "../../utils/getDirtyFieldsData";
import { useFetchPlansQuery } from "../../store";

const PetForm = ({ onClose, action, loading, defaultValues = {} }) => {
  const toastMsg = useToastMsg();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, dirtyFields },
  } = useForm({ defaultValues });

  useEffect(() => {
    setFocus("name");
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
      <FormControl className="mt-5" isInvalid={errors?.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="Lucas"
          {...register("name", { required: "Name is required" })}
        />
        <ErrorMessage error={errors?.name} message={errors?.name?.message} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.specie}>
        <FormLabel>Specie</FormLabel>
        <CSelect
          placeholder="Select specie..."
          {...register("specie", { required: "Specie is required" })}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </CSelect>
        <ErrorMessage
          error={errors?.specie}
          message={errors?.specie?.message}
        />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.plan}>
        <FormLabel>Plan</FormLabel>
        <Select
          useQuery={useFetchPlansQuery}
          placeholder="Select plan..."
          name="plan"
          register={register}
        />
        <ErrorMessage error={errors?.role} message={errors?.role?.message} />
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

export default PetForm;
