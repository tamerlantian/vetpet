import { Center, Text } from "@chakra-ui/react";

const NoContentMessage = ({ errorMessage }) => {
  return (
    <Center>
      <Text fontWeight={"bold"} fontSize={"xl"}>
        {errorMessage || "You don't have anything here yet."}
      </Text>
    </Center>
  );
};

export default NoContentMessage;
