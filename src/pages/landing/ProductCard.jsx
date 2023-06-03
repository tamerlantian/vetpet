import React from "react";
import {
  Stack,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import textHider from "../../utils/textHider";

const ProductCard = ({ imageLink, productName, price, description, kind }) => {
  return (
    <Card maxW={"sm"}>
      <CardBody>
        <Image
          src={imageLink}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Badge colorScheme="yellow" mt={3}>
          {kind}
        </Badge>
        <Stack mt={2} spacing={3}>
          <Heading size={"md"}>{productName}</Heading>
        </Stack>
        <Text color={"gray.600"} mt={2}>
          {textHider(description, 150)}
        </Text>
        <Text
          mt={4}
          color={"green.600"}
          fontWeight={"semibold"}
          fontSize={"2xl"}
        >
          {`$${price}`}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
