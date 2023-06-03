import React from "react";
import Hero from "./Hero";
import { Container } from "@chakra-ui/react";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import Section from "./Section";
import Pricing from "./Pricing";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Container maxW={"container.lg"} centerContent>
        <Section />
        <ProductsSection />
        <ServicesSection />
        <Pricing />
        <ContactSection />
      </Container>
      <Footer />
    </div>
  );
};

export default Landing;
