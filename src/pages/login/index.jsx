import { useLoginMutation } from "../../store";
import LoginForm from "./LoginForm";
import { Container, Box } from "@chakra-ui/react";

const Login = () => {
  const [loginUser, results] = useLoginMutation();
  return (
    <Container h="100vh" justifyContent="center" maxW="3xl" centerContent>
      <Box w="70%" alignItems="center">
        <LoginForm loginUser={loginUser} results={results} />
      </Box>
    </Container>
  );
};

export default Login;
