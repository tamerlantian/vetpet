import React, { useEffect, useState } from "react";
import { setCredentials } from "../../store/slices/authSlice";
import { ErrorMessage, InputEmail, InputPassword } from "../../components";
import { useLoginMutation } from "../../store";
import useToastMsg from "../../hooks/useToastMsg";
import {
  Button,
  FormControl,
  FormLabel,
  Box,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Logo } from "../../components";

const LoginForm = () => {
  const [loginUser, results] = useLoginMutation();
  const toastMsg = useToastMsg();
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors },
  } = useForm();

  // watch for password and email
  let email = watch("email");
  let password = watch("password");

  // set isDisabled to true if user has no typed any password or email
  const isDisabled =
    errors.email?.type === "required"
      ? true
      : errors.password?.type === "required"
      ? true
      : false;

  // set error message to null after typing email or password
  useEffect(() => {
    setErrMsg(null);
  }, [email, password]);

  useEffect(() => {
    setFocus("email");
  }, []);

  const navigateToProperRoute = (role) => {
    navigate(`/${role}`);
  };

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      const userData = await loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();
      toastMsg("Logged in successfully", "success");
      dispatch(setCredentials(userData));
      reset();
      const { role } = userData.user;
      navigateToProperRoute(role);
    } catch (error) {
      if (error.status === 401) {
        setErrMsg("Incorrect email or password");
        return;
      }

      toastMsg("An error ocurred", "error");
    }
  };

  return (
    <form
      className="w-full p-8 shadow-xl rounded-lg bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <VStack textAlign="center">
        <Logo linkTo={"/"} classname={"text-xl self-start mb-5"} />
        <Box as="h1" fontSize="1.8rem" fontWeight="bold">
          Sign in
        </Box>
        <HStack>
          <Text display="inline" color="gray.500">
            Don't have an account yet?
          </Text>
          <Link to="/signup" className="underline text-blue-500">
            Sign up
          </Link>
        </HStack>
      </VStack>

      <FormControl className="mt-5" isInvalid={errors?.email}>
        <FormLabel>Email</FormLabel>
        <InputEmail
          register={register}
          validations={{ required: "Email is required" }}
        />
        <ErrorMessage error={errors?.email} message={errors?.email?.message} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.password}>
        <FormLabel>Password</FormLabel>
        <InputPassword register={register} />
        <ErrorMessage
          error={errors?.password}
          message={errors?.password?.message}
        />
      </FormControl>
      {errMsg && <div className="text-red-500 mt-2">{errMsg}</div>}
      <HStack mt={5} justifyContent={"flex-end"}>
        <Button
          as={Link}
          variant={"link"}
          fontSize={"sm"}
          color={"blue.500"}
          to={"/reset-password"}
        >
          Forgot password?
        </Button>
      </HStack>
      <div className="flex justify-center mt-6">
        <Button
          w="100%"
          size="lg"
          isDisabled={isDisabled}
          isLoading={results.isLoading}
          type="submit"
          colorScheme="purple"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
