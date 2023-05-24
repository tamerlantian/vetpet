import React, { useEffect } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../components";
import useToastMsg from "../../hooks/useToastMsg";
import getDirtyFieldsData from "../../utils/getDirtyFieldsData";

const ProductForm = ({ onClose, action, loading, defaultValues = {} }) => {
  const toastMsg = useToastMsg();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, dirtyFields },
  } = useForm({ defaultValues });

  useEffect(() => {
    setFocus("kind");
  }, []);

  const onSubmit = async (data) => {
    try {
      if (data.price) data.price = data.price * 1;
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
      <FormControl className="mt-5" isInvalid={errors?.kind}>
        <FormLabel>Kind</FormLabel>
        <Select
          placeholder="Select kind"
          {...register("kind", { required: "This field is required" })}
        >
          <option value="product">Product</option>
          <option value="service">Service</option>
        </Select>
        <ErrorMessage error={errors?.kind} message={errors?.kind?.message} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="Dog show 1g puppets"
          {...register("name", { required: "Name is required" })}
        />
        <ErrorMessage error={errors?.name} message={errors?.name?.message} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.price}>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          size="lg"
          placeholder="20000"
          {...register("price", { required: "Price is required" })}
        />
        <ErrorMessage error={errors?.price} message={errors?.price?.message} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.description}>
        <FormLabel>Description</FormLabel>
        <Textarea
          size="lg"
          placeholder="Croquets contains chicken and beef"
          {...register("description", { required: "Description is required" })}
        />
        <ErrorMessage
          error={errors?.description}
          message={errors?.description?.message}
        />
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

export default ProductForm;
