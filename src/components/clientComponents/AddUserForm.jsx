import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  forwardRef,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../../store";

const CustomInput = forwardRef((props, ref) => {
  return <Input {...props} ref={ref} />;
});

const AddUserForm = ({ onClose }) => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const cardIdRef = useRef();

  // state for errors coming from the server
  const [errMsg, setErrMsg] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  // checks for changes in the email field
  const watchField = watch("email");

  // on submit function
  const onSubmit = async (data) => {
    try {
      await addUser(data).unwrap();
      reset();
      onClose();
    } catch (error) {
      if (error.status === 409) {
        console.log(error);
        setErrMsg(() => {
          return { ...errMsg, email: error?.data?.message };
        });
      }
    }
  };

  useEffect(() => {
    cardIdRef?.current?.focus();
  }, []);

  // if user type again in the field with the error message then set error message to empty
  useEffect(() => {
    setErrMsg({});
  }, [watchField]);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors?.cardId}>
        <FormLabel>Card ID</FormLabel>
        <CustomInput
          type="number"
          size="lg"
          placeholder="e.x 11122233344"
          {...register("cardId", {
            required: "Card ID is required",
          })}
          ref={cardIdRef}
        />
        {errors?.cardId && (
          <FormErrorMessage>{errors.cardId.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="Michael"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors?.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.lastname}>
        <FormLabel>Lastname</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="johnson caerl"
          {...register("lastname", {
            required: "Lastname is required",
          })}
        />
        {errors?.lastname && (
          <FormErrorMessage>{errors.lastname.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.phone}>
        <FormLabel>Phone number</FormLabel>
        <Input
          type="number"
          size="lg"
          placeholder="12223334444"
          {...register("phone", {
            required: "Phone is required",
            maxLength: 10,
          })}
        />
        {errors?.phone && (
          <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
        )}
        {errors?.phone?.type === "maxLength" && (
          <FormErrorMessage>Max lenght 10 characters</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.email || errMsg?.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          size="lg"
          placeholder="michael@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        {errors?.email?.type === "pattern" && (
          <FormErrorMessage>Invalid email</FormErrorMessage>
        )}
        {errors?.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
        {errMsg?.email && <FormErrorMessage>{errMsg.email}</FormErrorMessage>}
      </FormControl>

      <FormControl isInvalid={errors?.role}>
        <FormLabel>Role</FormLabel>
        <Select
          placeholder="Select role"
          {...register("role", { required: "Role is required" })}
        >
          <option>Admin</option>
          <option>Staff</option>
          <option>User</option>
        </Select>
        {errors?.role && (
          <FormErrorMessage>{errors.role.message}</FormErrorMessage>
        )}
      </FormControl>

      <div className="flex items-center justify-end py-2 gap-2">
        <Button
          isLoading={isLoading}
          isDisabled={
            Object.keys(errors).length !== 0 || Object.keys(errMsg).length !== 0
          }
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

export default AddUserForm;
