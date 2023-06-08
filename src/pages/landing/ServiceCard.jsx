import React from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image } from "@chakra-ui/react";


const ServiceCard = ({ data }) => {
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
        <Image src={data.icon} />
      </Flex>
      <Text fontWeight={"bold"}>{data.name}</Text>
      <Text color={"gray.600"}>{data.description}</Text>
    </Stack>
  );
};

export default ServiceCard;
