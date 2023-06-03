import React, { useEffect, useState } from "react";
import {
  AuthLayout,
  ErrorMessage,
  Logo,
  InputPassword,
} from "../../components";
import {
  FormControl,
  FormLabel,
  Stack,
  Text,
  VStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useChangePasswordMutation } from "../../store";
import { useForm } from "react-hook-form";
import useToastMsg from "../../hooks/useToastMsg";

const ResetPassword = () => {
  const [passwordMatched, setPasswordMatched] = useState(true);
  const [changePassword] = useChangePasswordMutation();
  const toastMsg = useToastMsg();
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors, dirtyFields },
  } = useForm();

  useEffect(() => {
    setFocus("password");
  }, []);

  console.log(resetToken);
  const fields = watch(["password", "confirmPassword"]);

  useEffect(() => {
    if (fields[0] !== fields[1] && dirtyFields.confirmPassword) {
      setPasswordMatched(false);
    } else {
      setPasswordMatched(true);
    }
  }, [fields[1]]);

  const onSubmit = async (data) => {
    if (fields[0] !== fields[1]) {
      return setPasswordMatched(false);
    }
    setPasswordMatched(true);
    try {
      reset();
      await changePassword({ data, resetToken }).unwrap();
      toastMsg("Password changed", "success");
      navigate("/login");
    } catch (error) {
      toastMsg("An error ocurred", "error");
    }
  };

  return (
    <AuthLayout>
      <VStack
        as={"form"}
        shadow={"base"}
        p={8}
        maxW={"md"}
        spacing={5}
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack>
          <Logo linkTo={"/"} classname={"text-xl self-start mb-5"} />
          <Box as="h1" fontSize="1.8rem" fontWeight="bold" text>
            Create new password
          </Box>
          <Text color={"gray.500"}>
            Your new password must be different from your previous password.
          </Text>
        </VStack>

        <FormControl isInvalid={errors?.password}>
          <FormLabel>Password</FormLabel>
          <InputPassword register={register} />
          <ErrorMessage
            error={errors?.email}
            message={errors?.email?.message}
          />
        </FormControl>

        <FormControl isInvalid={errors?.confirmPassword || !passwordMatched}>
          <FormLabel>Confirm password</FormLabel>
          <InputPassword name={"confirmPassword"} register={register} />
          <ErrorMessage
            error={errors?.confirmPassword}
            message={errors?.confirmPassword?.message}
          />
          <ErrorMessage
            error={!passwordMatched}
            message={"Both passwords must match"}
          />
        </FormControl>
        <Stack justifyItems={"flex-end"}>
          <Button
            type="submit"
            bg={"purple.400"}
            rounded={"md"}
            color={"white"}
            _hover={{ bg: "purple.700" }}
            // isLoading={isLoading}
          >
            Send
          </Button>
        </Stack>
      </VStack>
    </AuthLayout>
  );
};

export default ResetPassword;
