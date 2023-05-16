import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../../store";
import useToasMsg from "./../../hooks/useToastMsg";

const AddUserForm = ({ onClose }) => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const toastMsg = useToasMsg();
  // state for errors coming from the server
  const [errMsg, setErrMsg] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors },
  } = useForm();
  // checks for changes in the email field
  const watchField = watch("email");

  // on submit function
  const onSubmit = async (data) => {
    try {
      await addUser(data).unwrap();
      toastMsg("Successfully added", "success");
      reset();
      onClose();
    } catch (error) {
      const errorMessage = error?.data?.message;
      if (error.status !== 409) {
        toastMsg("An error occured", "error");
      }
      if (/email/i.test(errorMessage)) {
        setErrMsg(() => {
          return { ...errMsg, email: errorMessage };
        });
      }
      if (/cardid/i.test(errorMessage)) {
        setErrMsg(() => {
          return { ...errMsg, cardId: errorMessage };
        });
      }
    }
  };

  // if user type again in the field with the error message then set error message to empty
  useEffect(() => {
    setErrMsg({});
  }, [watchField]);

  useEffect(() => {
    setFocus("cardId");
  }, [setFocus]);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors?.cardId || errMsg.cardId}>
        <FormLabel>Card ID</FormLabel>
        <Input
          type="number"
          size="lg"
          placeholder="e.x 11122233344"
          {...register("cardId", {
            required: "Card ID is required",
          })}
        />
        {errors?.cardId && (
          <FormErrorMessage>{errors.cardId.message}</FormErrorMessage>
        )}
        {errMsg?.cardId && <FormErrorMessage>{errMsg.cardId}</FormErrorMessage>}
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.name}>
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

      <FormControl className="mt-5" isInvalid={errors?.lastname}>
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

      <FormControl className="mt-5" isInvalid={errors?.phone}>
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

      <FormControl className="mt-5" isInvalid={errors?.email || errMsg?.email}>
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

      <FormControl className="mt-5" isInvalid={errors?.role}>
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

      <div className="flex items-center justify-end mt-8 pb-4 gap-2">
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
