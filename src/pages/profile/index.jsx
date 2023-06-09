import { Header } from "../../components";
import { Container, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import EditMeForm from "./EditMeForm";
import { Avatar, Box, SimpleGrid } from "@chakra-ui/react";
import { SERVER } from "../../config/config";
import UpdatePhoto from "./UpdatePhoto";

const Profile = () => {
  const {
    user: { lastname, name, cardId, phone, email, photo },
  } = useSelector((state) => state.authSlice);

  let content = (
    <SimpleGrid columns={[1, null, null, 2]} spacing={5}>
      <GridItem w="100%">
        <Box
          as="h4"
          w="100%"
          mb="4"
          fontWeight="bold"
          fontSize="lg"
          size="3rem"
          textAlign="center"
        >
          Your profile picture
        </Box>
        <SimpleGrid justifyItems="center" gap="10">
          <Box>
            <Avatar
              size="2xl"
              name="Christian Nwamba"
              src={photo ? `${SERVER}${photo}` : ""}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            gap="3"
            flexDirection="column"
            w="16rem"
            maxW="60%"
          >
            <UpdatePhoto />
          </Box>
        </SimpleGrid>

        <Box textAlign="center" as="p" w="100%" mt="4" color="gray.400">
          Upload your photo. Recommended size is 256x256px
        </Box>
        <Box maxW="30rem" className="mx-auto">
          <EditMeForm
            defaultValues={{ cardId, name, lastname, phone, email }}
          />
        </Box>
      </GridItem>
    </SimpleGrid>
  );

  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Settings" title="Profile" />
      <div className="bg-white mt-5 p-10 rounded-3xl">{content}</div>
    </Container>
  );
};

export default Profile;
