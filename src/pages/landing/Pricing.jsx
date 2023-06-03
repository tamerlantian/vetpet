import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import PriceItem from "./PriceItem";

const Pricing = () => {
  return (
    <Box mt={20}>
      <SectionTitle title={"Plans"} />
      <VStack mt={10} spacing={2} textAlign={"center"}>
        <Text fontSize={"lg"} color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign={"center"}
        justify={"center"}
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceItem />
        <PriceItem bestPrice />
        <PriceItem />
      </Stack>
    </Box>
  );
};

export default Pricing;
