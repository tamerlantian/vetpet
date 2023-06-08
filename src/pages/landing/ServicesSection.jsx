import React from "react";
import SectionTitle from "./SectionTitle";
import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import PrimaryButton from "./PrimaryButton";
import vaccineIcon from "../../../public/vaccine.png";
import veterinarianIcon from "../../../public/veterinarian.png";
import clinicIcon from "../../../public/clinic.png";

const ServicesSection = () => {
  const data = [
    {
      name: "Pet Boarding",
      description:
        " Offering a safe and comfortable environment for pets to stay while their owners are away, including proper feeding, exercise, and supervision.",
      icon: clinicIcon,
    },
    {
      name: "Vaccinations",
      description:
        "Administering routine vaccinations to prevent diseases and protect pets, including vaccinations for rabies, distemper, parvovirus, and more.",
      icon: vaccineIcon,
    },
    {
      name: "Veterinary Consultations",
      description:
        " Offering consultations with veterinarians or veterinary technicians to provide advice, answer questions, and address concerns about pet health, behavior, nutrition, and general wellness.",
      icon: veterinarianIcon,
    },
  ];

  return (
    <Box mt={20}>
      <SectionTitle title={"Services"} />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} marginTop={10}>
        {data.map((serviceData) => (
          <ServiceCard data={serviceData} />
        ))}
      </SimpleGrid>
      <Stack align={"flex-end"} mt={4}>
        <PrimaryButton isDisabled name={"view all"} />
      </Stack>
    </Box>
  );
};

export default ServicesSection;
