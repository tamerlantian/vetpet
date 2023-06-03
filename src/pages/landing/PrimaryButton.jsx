import React from "react";
import { Button } from "@chakra-ui/react";

const PrimaryButton = (props) => {
  return (
    <Button
      bg={"purple.400"}
      rounded={"md"}
      color={"white"}
      _hover={{ bg: "purple.700" }}
      mt={4}
      {...props}
    >
      {props.name}
    </Button>
  );
};

export default PrimaryButton;
