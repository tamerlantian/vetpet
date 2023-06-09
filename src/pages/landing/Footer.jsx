import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { Logo } from "../../components";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0,3s ease"}
      _hover={{ bg: "blackAlpha.200" }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  const footerItems = [
    {
      header: "company",
      links: [
        {
          name: "about us",
          link: "",
        },
        {
          name: "services",
          link: "",
        },
        {
          name: "plans",
          link: "",
        },
        {
          name: "products",
          link: "",
        },
      ],
    },
  ];

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };

  return (
    <Box bg={"gray.50"} color={"gray.700"} mt={20}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          justifyItems={"center"}
          spacing={6}
        >
          <Stack
            spacing={6}
            display={"flex"}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Box>
              <Logo />
            </Box>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text fontSize={"sm"}>Opening hours: 07:00 - 17:00</Text>
              <Text fontSize={"sm"}>Contact: +57 320 8897458 - 4454578</Text>
            </Box>
          </Stack>
          {footerItems.map(({ header, links }) => {
            return (
              <Stack key={header} align={"flex-start"}>
                <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                  {header}
                </Text>
                {links.map(({ name, link }) => {
                  return (
                    <Link key={name} to={link}>
                      {name}
                    </Link>
                  );
                })}
              </Stack>
            );
          })}
          <Stack align={"flex-start"}>
            <ListHeader>Developers</ListHeader>
            <Text>Sebastian Hoyos</Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTop={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center " }}
        >
          <Text>© 2022 VetPet. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Github"}
              href="https://github.com/tamerlantian"
            >
              <AiFillGithub />
            </SocialButton>
            <SocialButton label={"Twitter"} href="https://twitter.com/2301_ian">
              <AiFillTwitterCircle />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
