import { Box, Container } from "@chakra-ui/react";

const AuthLayout = ({ children }) => {
  return (
    <Box>
      <Container
        h="100vh"
        justifyContent={{ base: "", lg: "center" }}
        maxW="3xl"
        centerContent
      >
        <Box maxW={"95%"}>{children}</Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
