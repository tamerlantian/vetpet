import { useEffect, useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useSignupMutation } from "../../store";
import { useForm } from "react-hook-form";
import { ErrorMessage, InputPassword, InputEmail } from "../../components";
import { VscArrowRight } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import useToastMsg from "../../hooks/useToastMsg";
import { Logo } from "../../components";

const SignupForm = () => {
  const [signup, results] = useSignupMutation();
  const [errMsg, setErrMsg] = useState({});
  const toastMsg = useToastMsg();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    setFocus("cardId");
  }, [])

  const onSubmit = async (data) => {
    try {
      await signup(data).unwrap();
      toastMsg("Your account was created!", "success");
      navigate("/user/affiliation");
      reset();
    } catch (error) {
      if (error.status !== 409) {
        toastMsg("An error occured", "error");
      }
    }
  };

  return (
    <form
      className="w-full mt-10 shadow-xl p-8 rounded-lg bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <VStack textAlign="center">
        <Logo linkTo={"/"} classname={"text-xl self-start mb-5"} />
        <Box as="h1" fontSize="1.8rem" fontWeight="bold" marginBottom=".6rem">
          Create account
        </Box>
        <HStack>
          <Box as="p" display="inline" color="gray.500">
            Already have an account?
          </Box>
          <Link to="/login" className="underline text-blue-500">
            {" "}
            Sign in
          </Link>
        </HStack>
      </VStack>

      <FormControl className="mt-5" isInvalid={errors?.cardId || errMsg.cardId}>
        <FormLabel>Card ID</FormLabel>
        <Input
          type="number"
          size="lg"
          placeholder="11122233344"
          {...register("cardId", {
            required: "Card ID is required",
          })}
        />
        <ErrorMessage error={errors?.name} message={errors?.name?.message} />
        <ErrorMessage error={errMsg?.cardId} message={errMsg.cardId} />
      </FormControl>

      <Flex direction={{ base: "column", md: "row" }} gap={2}>
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
      </Flex>

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
        <InputEmail
          register={register}
          validations={{
            required: "Email is required",
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          }}
        />
        <ErrorMessage
          error={errors?.email?.type === "pattern"}
          message="Invalid email"
        />
        <ErrorMessage error={errors?.email} message={errors?.email?.message} />
        <ErrorMessage error={errMsg?.email} message={errMsg?.email} />
      </FormControl>

      <FormControl className="mt-5" isInvalid={errors?.password}>
        <FormLabel>Password</FormLabel>
        <InputPassword register={register} />
        <ErrorMessage
          error={errors?.password}
          message={errors?.password?.message}
        />
      </FormControl>

      <div className="flex items-center justify-end mt-8 pb-16 gap-2">
        <Button
          w="100%"
          size="lg"
          rightIcon={<VscArrowRight className="text-lg" />}
          iconSpacing="1rem"
          isLoading={results.isLoading}
          isDisabled={
            Object.keys(errors).length !== 0 || Object.keys(errMsg).length !== 0
          }
          colorScheme="purple"
          type="submit"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
