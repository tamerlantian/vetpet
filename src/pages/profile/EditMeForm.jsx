import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import useToasMsg from "./../../hooks/useToastMsg";
import { ErrorMessage } from "../../components";
import getDirtyFieldsData from "../../utils/getDirtyFieldsData";
import { useUpdateMeMutation } from "../../store";

const EditMeForm = ({ defaultValues = {} }) => {
  const [updateMe, { isLoading }] = useUpdateMeMutation();
  const toastMsg = useToasMsg();
  // state for errors coming from the server
  const [errMsg, setErrMsg] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues,
  });
  // checks for changes in the email field
  const watchEmail = watch("email");

  // on submit function
  const onSubmit = async (data) => {
    try {
      // this conditional will send data only when user's trying to udpate
      if (Object.keys(defaultValues).length !== 0) {
        const dirtyFieldsData = getDirtyFieldsData(data, dirtyFields);
        await updateMe(dirtyFieldsData).unwrap();
        toastMsg("Updated successfully", "success");
        return;
      }
    } catch (error) {
      const errorMessage = error?.data?.message;
      if (error.status !== 409) {
        toastMsg("An error occured", "error");
      }
      if (/email/i.test(errorMessage)) {
        setErrMsg({ ...errMsg, email: errorMessage });
      }
    }
  };

  // check if every object isn't empy
  const isObjEmpty = (arrObj) =>
    arrObj.some((obj) => Object.keys(obj).length !== 0);

  const buttonDisabled =
    isObjEmpty([errors, errMsg]) || Object.keys(dirtyFields).length == 0;

  // if user type again in the field with the error message then set error message to empty
  useEffect(() => {
    setErrMsg({});
  }, [watchEmail]);

  useEffect(() => {
    setFocus("name");
  }, []);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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

      <div className="flex items-center justify-end mt-8 pb-4 gap-2">
        <Button
          isLoading={isLoading}
          isDisabled={buttonDisabled}
          colorScheme="purple"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditMeForm;
