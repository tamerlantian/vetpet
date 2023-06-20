import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const FallbackSpinner = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h={"100vh"}>
      <Spinner />
    </Flex>
  );
};

export default FallbackSpinner;
