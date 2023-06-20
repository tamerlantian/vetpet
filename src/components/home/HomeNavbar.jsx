import { Logo } from "../";
import { HamburguerButton, Links } from "../../components";
import { Link } from "react-router-dom";
import { useDeviceTracker } from "../../hooks/useDeviceTracker";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import PrimaryButton from "../../pages/landing/PrimaryButton";
import { PublicRoutes } from "../../models/routes";

const HomeNavbar = () => {
  const isMobile = useDeviceTracker(900);

  return (
    <div className="flex flex-col justify-between items-center p-4 gap-5 shadow-xl">
      <div className="flex items-center justify-between w-full">
        <Logo classname="text-xl" linkTo="/" />
        <p>
          <span className="font-bold">Open: </span>7:00 - 17:00{" "}
        </p>
      </div>
      <Box w={"full"}>
        <Flex justifyContent={"space-between"}>
          {isMobile ? (
            <HamburguerButton />
          ) : (
            <Links style="flex flex-row gap-4" />
          )}
          <HStack spacing={4}>
            <Button
              as={Link}
              variant={"link"}
              fontSize={"sm"}
              fontWeight={"400"}
              to={PublicRoutes.LOGIN}
            >
              Sign In
            </Button>
            <PrimaryButton name={"Sign Up"} to={"/signup"} fontSize={"sm"} />
          </HStack>
        </Flex>
      </Box>
    </div>
  );
};

export default HomeNavbar;
