import React from "react";
import {
  Box,
  Button,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const PriceItem = ({ data }) => {
  return (
    <Box
      mb={4}
      shadow={"base"}
      borderWidth={"1px"}
      alignSelf={{ base: "center" }}
      borderRadius={"xl"}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      position={"relative"}
    >
      {data.mostPopular && (
        <Box
          position={"absolute"}
          top={"-16px"}
          left={"50%"}
          style={{ transform: "translate(-50%)" }}
        >
          <Text
            textTransform={"uppercase"}
            bg={"purple.300"}
            px={3}
            py={1}
            color={"gray.900"}
            fontSize={"sm"}
            fontWeight={"600"}
            rounded={"xl"}
          >
            Most Popular
          </Text>
        </Box>
      )}
      <Box py={4} px={12}>
        <Text fontWeight={"500"} fontSize={"2xl"}>
          {data.name}
        </Text>
        <HStack justifyContent={"center"}>
          <Text fontSize={"3xl"} fontWeight={"600"}>
            $
          </Text>
          <Text fontSize={"5xl"} fontWeight={"900"}>
            {data.price}
          </Text>
          <Text fontSize={"3xl"} color={"gray.500"}>
            /month
          </Text>
        </HStack>
      </Box>
      <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
        <List spacing={3} textAlign={"start"} px={12}>
          {data.planDetails.map((detail, i) => {
            return (
              <ListItem key={i}>
                <ListIcon as={FaCheckCircle} color={"green.500"} />
                {detail}
              </ListItem>
            );
          })}
        </List>
        <Box w={"80%"} pt={7}>
          <Button w={"full"} colorScheme="purple" variant={"outline"}>
            Buy plan
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default PriceItem;
