import { useDisclosure, Box, Badge, Tag, Avatar } from "@chakra-ui/react";
import { ModalForm } from "../../components";

const ViewPet = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const states = {
    accepted: {
      tag: "accepted",
      color: "green",
    },
    rejected: {
      tag: "rejected",
      color: "red",
    },
  };

  return (
    <>
      <button className="w-full flex justify-start" onClick={onOpen}>
        View
      </button>
      <ModalForm
        title="Pet information"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <Box w="100%" paddingBottom="2rem">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1rem"
          >
            <Avatar size="xl" name="Dan Abrahmov" />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="1rem"
            >
              <Tag size="sm" variant="subtle" colorScheme="cyan">
                {data.plan?.name}
              </Tag>
              <Box as="h5" fontWeight="bold" fontSize="xl">
                {data.name}
              </Box>
            </Box>
          </Box>
          <Box marginTop="2rem">
            <Box marginBottom=".5rem">
              <Box as="span" fontWeight="bold" marginRight=".5rem">
                Price:
              </Box>
              {data.plan?.price}
            </Box>
            <Box>
              <Box as="span" fontWeight="bold" marginRight=".5rem">
                Status:
              </Box>
              <Badge colorScheme={states[data.state].color}>
                {states[data.state].tag}
              </Badge>
            </Box>
            <Box as="p" marginTop=".5rem">
              <Box as="span" fontWeight="bold" marginRight=".5rem">
                Comment:
              </Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              tempora quam nulla veniam possimus at culpa voluptatum sit
              necessitatibus consequuntur accusantium fuga eligendi laudantium,
              id accusamus error facilis nihil ab?
            </Box>
          </Box>
        </Box>
      </ModalForm>
    </>
  );
};

export default ViewPet;
