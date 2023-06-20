import { AuthLayout, ErrorMessage } from "../../components";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";
import { useForgotPasswordMutation } from "../../store";
import { useForm } from "react-hook-form";
import useToastMsg from "../../hooks/useToastMsg";
import { PublicRoutes } from "../../models/routes";

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] =
    useForgotPasswordMutation();
  const toastMsg = useToastMsg();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data);
      reset();
      toastMsg("Email sent", "success");
      navigate(PublicRoutes.LOGIN);
    } catch (error) {
      toastMsg("Email not sent", "error");
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
            Password Reset
          </Box>
          <Text color={"gray.500"}>
            Enter your your{" "}
            <Text display={"inline"} fontWeight={"bold"}>
              email address
            </Text>{" "}
            that you used to register. We'll send you an email with your
            username and a link to reset your password.
          </Text>
        </VStack>
        <FormControl isInvalid={errors?.email}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder={"Email address"}
            size={"lg"}
            {...register("email", { required: "Please provide your Email" })}
          />
          <ErrorMessage
            error={errors?.email}
            message={errors?.email?.message}
          />
        </FormControl>
        <Stack justifyItems={"flex-end"}>
          <Button
            type="submit"
            bg={"purple.400"}
            rounded={"md"}
            color={"white"}
            _hover={{ bg: "purple.700" }}
            isLoading={isLoading}
          >
            Send
          </Button>
        </Stack>
      </VStack>
    </AuthLayout>
  );
};

export default ForgotPassword;
