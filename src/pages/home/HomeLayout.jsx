import React from "react";
import { HomeNavbar } from "../../components";
import { Container } from "@chakra-ui/react";
import Hero from "./Hero";

const HomeLayout = () => {
  return (
    <Container maxW="" padding="0">
      <HomeNavbar />
      <Hero />
    </Container>
  );
};

export default HomeLayout;
