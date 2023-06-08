import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import PriceItem from "./PriceItem";

const Pricing = () => {
  const data = [
    {
      name: "premium",
      mostPopular: false,
      price: 6000,
      planDetails: ["Veterinary Consultations", "Pet Grooming", "Pet Boarding"],
    },
    {
      name: "gold",
      mostPopular: true,
      price: 7000,
      planDetails: ["Laboratory Services", "Vaccinations", "Pet Training Classes", "Veterinary Consultations", "Pet Grooming", "Pet Boarding"],
    },
    {
      name: "diamong",
      mostPopular: false,
      price: 9000,
      planDetails: ["Pet Grooming", "Veterinary Consultations", "Pet Boarding", "Vaccinations"],
    },
  ];

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
        direction={{ base: "column", lg: "row" }}
        textAlign={"center"}
        justify={"center"}
        spacing={{ base: 4, xl: 10 }}
        py={10}
      >
        {data.map((planData) => (
          <PriceItem key={planData.name} data={planData} />
        ))}
      </Stack>
    </Box>
  );
};

export default Pricing;
