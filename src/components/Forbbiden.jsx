import { Flex, VStack, Text, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import image403 from "../../public/403 Error Forbidden-amico.png";

const Forbbiden = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack spacing={5}>
        <Box textAlign={"center"}>
          <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={"bold"}>
            Forbbiden
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            maxW={"lg"}
            w={"90%"}
            margin={"0 auto"}
          >
            The page you're trying to access has restricted access. Please refer
            to your system administrator.{" "}
            <Text
              as={Link}
              to={"/"}
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              go back
            </Text>
          </Text>
        </Box>
        <Box maxW={"lg"}>
          <Image src={image403} maxW={"full"} />
        </Box>
      </VStack>
    </Flex>
  );
};

export default Forbbiden;
