import { useEffect } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../components";
import DynamicPlanSelector from "../../components/form/DynamicPlanSelector";
import DynamicCitySelector from "../../components/form/DynamicCitySelector";
import useToastMsg from "../../hooks/useToastMsg";
import getDirtyFieldsData from "../../utils/getDirtyFieldsData";

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

      <FormControl className="mt-5" isInvalid={errors?.address}>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="cra. 5 # 12b -25"
          {...register("address", { required: "Address is required" })}
        />
        <ErrorMessage
          error={errors?.address}
          message={errors?.address?.message}
        />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.city}>
        <FormLabel>City</FormLabel>
        <DynamicCitySelector
          placeholder="select city..."
          name="city"
          register={register}
        />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.specie}>
        <FormLabel>Specie</FormLabel>
        <Select
          placeholder="Select specie..."
          {...register("specie", { required: "Specie is required" })}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
        <ErrorMessage
          error={errors?.specie}
          message={errors?.specie?.message}
        />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.plan}>
        <FormLabel>Plan</FormLabel>
        <DynamicPlanSelector
          placeholder="select plan..."
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
