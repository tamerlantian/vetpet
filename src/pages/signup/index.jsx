import SignupForm from "./SignupForm";
import { useSignupMutation } from "../../store";
import { AuthLayout } from "../../components";

const Signup = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
