import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import { ErrorMessage } from "../../components";
import { useAddProspectMutation } from "../../store";
import { useForm } from "react-hook-form";
import useToastMsg from "../../hooks/useToastMsg";

const ContactForm = () => {
  const [addProspect, { isLoading }] = useAddProspectMutation();
  const toastMsg = useToastMsg();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const isDisabled = Object.keys(errors).length;

  const onSubmit = async (data) => {
    try {
      await addProspect(data).unwrap();
      reset();
      toastMsg("Message sent", "success");
    } catch (error) {
      toastMsg("An error has occured", "error");
    }
  };

  return (
    <VStack
      as="form"
      shadow={"base"}
      p={8}
      rounded={"lg"}
      onSubmit={handleSubmit(onSubmit)}
      spacing={5}
      py={10}
      maxW={"35rem"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 5, md: 2 }}
      >
        <FormControl isInvalid={errors?.name}>
          <FormLabel>Name</FormLabel>
          <Input
            size={"lg"}
            placeholder="Antoine"
            {...register("name", { required: "This field is required" })}
          />
          <ErrorMessage error={errors?.name} message={errors?.name?.message} />
        </FormControl>

        <FormControl isInvalid={errors?.lastname}>
          <FormLabel>Lastname</FormLabel>
          <Input
            size={"lg"}
            placeholder="Valencia"
            {...register("lastname", { required: "This field is required" })}
          />
          <ErrorMessage
            error={errors?.lastname}
            message={errors?.lastname?.message}
          />
        </FormControl>
      </Stack>

      <FormControl isInvalid={errors?.email}>
        <FormLabel>Email</FormLabel>
        <Input
          size={"lg"}
          placeholder="example@gmail.com"
          {...register("email", { required: "This field is required" })}
        />
        <ErrorMessage error={errors?.email} message={errors?.email?.message} />
      </FormControl>

      <FormControl isInvalid={errors?.phone}>
        <FormLabel>Phone</FormLabel>
        <Input
          size={"lg"}
          placeholder="6054856059"
          {...register("phone", { required: "This field is required" })}
        />
        <ErrorMessage error={errors?.phone} message={errors?.phone?.message} />
      </FormControl>

      <FormControl isInvalid={errors?.comment}>
        <FormLabel>Comment</FormLabel>
        <Textarea
          size={"md"}
          {...register("comment", { required: "This field is required" })}
        />
        <ErrorMessage
          error={errors?.comment}
          message={errors?.comment?.message}
        />
      </FormControl>
      <Box mt={5} w={"100%"} display={"flex"} justifyContent={"flex-end"}>
        <Button
          type="submit"
          isLoading={isLoading}
          isDisabled={isDisabled}
          w={{ base: "100%", md: "fit-content" }}
          colorScheme="purple"
        >
          Submit
        </Button>
      </Box>
    </VStack>
  );
};

export default ContactForm;
