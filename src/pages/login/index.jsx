import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@chakra-ui/react";
import { useLoginMutation } from "../../store";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
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

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      const userData = await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials(userData));
      reset();
      navigate("/dashboard");
    } catch (error) {
      if (error.status === 401) {
        setErrMsg("Incorrect email or password");
      }
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form className="shadow-xl rounded p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            {...register("email", { required: "Email is required" })}
            size="lg"
            isInvalid={errors.email?.type === "required"}
            errorBorderColor="red.300"
            placeholder="example@hotmail.com"
          />
          {errors.email && (
            <span className="text-red-600 mt-1">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            {...register("password", { required: "Password is required" })}
            size="lg"
            isInvalid={errors.password?.type === "required"}
            placeholder="*******"
          />
          {errors.password && (
            <span className="text-red-600 mt-1">{errors.password.message}</span>
          )}
        </div>
        {errMsg && <div className="text-red-500 mt-2">{errMsg}</div>}
        <div className="flex justify-center mt-10 ">
          <Button
            isDisabled={isDisabled}
            isLoading={isLoading}
            type="submit"
            colorScheme="purple"
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Login;
