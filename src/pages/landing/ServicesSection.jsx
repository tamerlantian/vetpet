import React from "react";
import SectionTitle from "./SectionTitle";
import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import PrimaryButton from "./PrimaryButton";

const ServicesSection = () => {
  return (
    <Box mt={20}>
      <SectionTitle title={"Services"} />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} marginTop={10}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </SimpleGrid>
      <Stack align={"flex-end"} mt={4}>
        <PrimaryButton name={"view all"} />
      </Stack>
    </Box>
  );
};

export default ServicesSection;
