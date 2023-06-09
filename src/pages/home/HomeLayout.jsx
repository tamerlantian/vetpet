import { HomeNavbar } from "../../components";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Container maxW="" padding="0">
      <HomeNavbar />
      <Outlet />
    </Container>
  );
};

export default HomeLayout;
