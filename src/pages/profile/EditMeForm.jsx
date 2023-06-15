import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import useToasMsg from "./../../hooks/useToastMsg";
import { ErrorMessage } from "../../components";
import getDirtyFieldsData from "../../utils/getDirtyFieldsData";
import { useUpdateMeMutation } from "../../store/apis/usersSlice";

const EditMeForm = ({ defaultValues = {} }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [updateMe, { isLoading }] = useUpdateMeMutation();
  const toastMsg = useToasMsg();
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues,
  });

  const fields = watch();
  // on submit function
  const onSubmit = async (data) => {
    try {
      // this conditional will send data only when user's trying to udpate
      if (Object.keys(defaultValues).length !== 0) {
        const dirtyFieldsData = getDirtyFieldsData(data, dirtyFields);
        await updateMe(dirtyFieldsData).unwrap();
        toastMsg("Updated successfully", "success");
        reset({ keepDefaultValues: true, keepDirtyValues: true });
        return;
      }
    } catch (error) {
      toastMsg("An error occured", "error");
    }
  };

  // check if every object isn't empty
  const isObjEmpty = (arrObj) =>
    arrObj.some((obj) => Object.keys(obj).length !== 0);

  useEffect(() => {
    isObjEmpty([errors]) || Object.keys(dirtyFields).length == 0
      ? setIsButtonDisabled(true)
      : setIsButtonDisabled(false);
  }, [fields]);

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

      <FormControl className="mt-5">
        <FormLabel>Email</FormLabel>
        <Input type="text" size="lg" isDisabled {...register("email")} />
      </FormControl>

      <div className="flex items-center justify-end mt-8 pb-4 gap-2">
        <Button
          isLoading={isLoading}
          isDisabled={isButtonDisabled}
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
