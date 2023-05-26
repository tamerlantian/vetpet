import React from "react";
import { Box, Container } from "@chakra-ui/react";
import SignupForm from "./SignupForm";
import { useSignupMutation } from "../../store";

const Signup = () => {
  const [signup, results] = useSignupMutation();

  return (
    <Container h="100vh" justifyContent="center" maxW="3xl" centerContent>
      <Box w="80%" alignItems="center">
        <SignupForm signup={signup} results={results} />
      </Box>
    </Container>
  );
};

export default Signup;
