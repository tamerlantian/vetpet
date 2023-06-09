import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PrimaryButton = (props) => {
  return (
    <Button
      as={Link}
      bg={"purple.400"}
      rounded={"md"}
      color={"white"}
      _hover={{ bg: "purple.700" }}
      mt={4}
      to={props.to}
      {...props}
    >
      {props.name}
    </Button>
  );
};

export default PrimaryButton;
