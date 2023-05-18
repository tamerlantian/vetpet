import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import useToasMsg from "./../../hooks/useToastMsg";
import { ErrorMessage } from "../";

const getDirtyFieldsData = (formData, dirtyFields) => {
  dirtyFields = Object.keys(dirtyFields);
  const fieldSelector = Object.entries(formData).filter((formField) =>
    dirtyFields.includes(formField[0])
  );
  return Object.fromEntries(fieldSelector);
};

// userForm or AddUserForm
const AddUserForm = ({ onClose, action, userData, loading }) => {
  const toastMsg = useToasMsg();
  // state for errors coming from the server
  const [errMsg, setErrMsg] = useState({});
  const defaultValues = userData
    ? {
        id: userData.data?._id,
        cardId: userData.data?.cardId,
        name: userData.data?.name,
        lastname: userData.data?.lastname,
        phone: userData.data?.phone,
        email: userData.data?.email,
        role: userData.data?.role,
      }
    : {
        cardId: "",
        name: "",
        lastname: "",
        phone: "",
        email: "",
        role: "",
      };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues,
  });
  // checks for changes in the email field
  const watchEmail = watch("email");
  const watchCardId = watch("cardId");

  // on submit function
  const onSubmit = async (data) => {
    try {
      // this conditional will send data only when user's trying to udpate
      if (userData !== undefined) {
        const dirtyFieldsData = getDirtyFieldsData(data, dirtyFields);
        dirtyFieldsData.id = defaultValues.id;
        console.log("DATA: ", dirtyFieldsData)
        await action(dirtyFieldsData).unwrap();
        onClose();
        reset();
        return;
      }

      // this code here will only run if user's trying to create a new user
      await action(data).unwrap();
      toastMsg("Successfully added", "success");
      reset();
      onClose();
    } catch (error) {
      const errorMessage = error?.data?.message;
      if (error.status !== 409) {
        toastMsg("An error occured", "error");
      }
      if (/email/i.test(errorMessage)) {
        setErrMsg({ ...errMsg, email: errorMessage });
      }
      if (/cardid/i.test(errorMessage)) {
        setErrMsg({ ...errMsg, cardId: errorMessage });
      }
    }
  };

  // if user type again in the field with the error message then set error message to empty
  useEffect(() => {
    setErrMsg({});
  }, [watchCardId, watchEmail]);

  useEffect(() => {
    setFocus("cardId");
  }, []);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {userData !== undefined && (
        <FormControl className="hidden">
          <FormLabel>ID</FormLabel>
          <Input
            isDisabled
            type="text"
            size="lg"
            {...register("id", { required: true })}
          />
        </FormControl>
      )}

      <FormControl className="mt-5" isInvalid={errors?.cardId || errMsg.cardId}>
        <FormLabel>Card ID</FormLabel>
        <Input
          type="number"
          size="lg"
          placeholder="e.x 11122233344"
          {...register("cardId", {
            required: "Card ID is required",
          })}
        />
        <ErrorMessage error={errors?.name} message={errors?.name?.message} />
        <ErrorMessage error={errMsg?.cardId} message={errMsg.cardId} />
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
        <ErrorMessage error={errors?.name} message={errors?.name?.message} />
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
        <ErrorMessage
          error={errors?.lastname}
          message={errors?.lastname?.message}
        />
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
        <ErrorMessage error={errors?.phone} message={errors?.phone?.message} />
        <ErrorMessage
          error={errors?.phone?.type === "maxLength"}
          message="Max length 10"
        />
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
        <ErrorMessage
          error={errors?.email?.type === "pattern"}
          message="Invalid email"
        />
        <ErrorMessage error={errors?.email} message={errors?.email?.message} />
        <ErrorMessage error={errMsg?.email} message={errMsg?.email} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.role}>
        <FormLabel>Role</FormLabel>
        <Select
          placeholder="Select role"
          {...register("role", { required: "Role is required" })}
        >
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="user">User</option>
        </Select>
        <ErrorMessage error={errors?.role} message={errors?.role?.message} />
      </FormControl>

      <div className="flex items-center justify-end mt-8 pb-4 gap-2">
        <Button
          isLoading={loading}
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
