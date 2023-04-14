import React from "react";
import { Header } from "../components";
import { Container } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Home" title="Dashboard" />
    </Container>
  );
};

export default Dashboard;
