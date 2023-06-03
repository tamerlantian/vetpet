import React from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const ServiceCard = () => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
      >
        <Icon as={FcAssistant} w={10} h={10} />
      </Flex>
      <Text fontWeight={"bold"}>Haircuting</Text>
      <Text color={"gray.600"}>
        Stop in with your pet for a specific vaccination, diagnostic test or
        service—there are no appointment costs or office visit fees, so you only
        pay for what you really need.
      </Text>
    </Stack>
  );
};

export default ServiceCard;
