import { Flex, VStack, Text, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import image404 from "../../public/404 Error with a cute animal-amico.png";

const NotFound = () => {
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
            Page not found
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            maxW={"lg"}
            w={"90%"}
            margin={"0 auto"}
          >
            Sorry we couldn't find this page. But don't worry, you can find
            plenty of other things in our{" "}
            <Text
              as={Link}
              to={"/"}
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              homepage
            </Text>
            .
          </Text>
        </Box>
        <Box maxW={"lg"}>
          <Image src={image404} maxW={"full"} />
        </Box>
      </VStack>
    </Flex>
  );
};

export default NotFound;
