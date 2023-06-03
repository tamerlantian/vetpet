import React from "react";
import SectionTitle from "./SectionTitle";
import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const Section = () => {
  return (
    <Box mt={20}>
      <SectionTitle title={"Our mision"} />
      <SimpleGrid columns={[1, 2]} gap={6} mt={10}>
        <Box order={1}>
          <Image
            src="https://www.sadenir.com.uy/wp-content/uploads/2020/11/veterinarian-check-ing-puppy-s-health-2.jpg"
            w={"100%"}
            alt="a veterinarian carrying a dog"
            rounded={'lg'}
          />
        </Box>
        <Stack textAlign={'right'} spacing={5}>
          <Heading as={"h3"} size={"md"}>
            Our mission is the well-being of your pet.
          </Heading>
          <Text fontSize={"lg"}>
            "To offer well-being to both animals and the families of our
            patients through the provision of veterinary medical and
            complementary services. Our team shares values and ethical
            principles of respect, responsibility, and commitment, delivering
            quality and satisfaction in our services."
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Section;
