import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import backgroundHero from "../../../public/background_hero.jpg";

const Hero = () => {
  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={backgroundHero}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundBlendMode={"saturation"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          backgroundColor={"rgba(0, 0, 0, 0.7)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={"bold"}
              lineHeight={"1.2"}
              fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
            >
              Happy pets make happy owners
            </Text>
            <Text
              color={"white"}
              fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
            >
              We provide affordable, convenient, preventive veterinary care and
              wellness services to ensure your pet is healthy year-round.
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"purple.400"}
                rounded={"md"}
                color={"white"}
                _hover={{ bg: "purple.700" }}
              >
                Contact us
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default Hero;
