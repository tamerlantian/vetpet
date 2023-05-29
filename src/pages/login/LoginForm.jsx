import React, { useEffect, useState } from "react";
import { setCredentials } from "../../store/slices/authSlice";
import { ErrorMessage, InputEmail, InputPassword } from "../../components";
import { Button, FormControl, FormLabel, Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const LoginForm = ({ loginUser, results }) => {
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

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      const userData = await loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials(userData));
      reset();
      const { role } = userData.user;
      if (role === "admin") {
        navigate("/admin");
      }
      if (role === "user") {
        navigate("/user");
      }
    } catch (error) {
      if (error.status === 401) {
        setErrMsg("Incorrect email or password");
      }
    }
  };

  return (
    <form
      className="w-full p-8 shadow-xl rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box textAlign="center" marginBottom="3.5rem">
        <Box as="h1" fontSize="1.8rem" fontWeight="bold" marginBottom=".6rem">
          Sign in
        </Box>
        <Box as="p" display="inline" color="gray.500">
          Don't have an account yet?
        </Box>
        <Link to="/signup" className="underline text-blue-500">
          {" "}
          Sign up
        </Link>
      </Box>

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
      <div className="flex justify-center mt-10 ">
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
