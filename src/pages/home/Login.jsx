import { useForm } from "react-hook-form";
import { Input } from "../../components";
import { Button } from "@chakra-ui/react";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const inputStyle = "border rounded-md py-3 px-5";

  return (
    <main className="flex justify-center items-center h-screen">
      <form className="shadow-xl rounded p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <Input
            typeName="email"
            classname={inputStyle}
            name="email"
            register={register}
            error={errors.email}
            errorMessage="This is a required field"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password">Password</label>
          <Input
            typeName="password"
            classname={inputStyle}
            name="password"
            register={register}
            error={errors.password}
            errorMessage="This is a required field"
          />
        </div>
        <div className="flex justify-center mt-10 ">
          <Button type="submit" colorScheme="purple">
            Login
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Login;
