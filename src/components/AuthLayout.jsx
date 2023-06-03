import React from "react";
import { Box, Container } from "@chakra-ui/react";

const AuthLayout = ({ children }) => {
  return (
    <Box>
      <Container h="100vh" justifyContent="center" maxW="3xl" centerContent>
        <Box maxW={"95%"} alignItems="center">
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
