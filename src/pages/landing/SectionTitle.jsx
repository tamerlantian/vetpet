import React from "react";
import { useBreakpointValue, Text } from "@chakra-ui/react";

const SectionTitle = ({ title }) => {
  return (
    <Text
      textAlign={"center"}
      fontWeight={"bold"}
      fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
