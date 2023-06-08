import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/slices/authSlice";
import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { Spinner, Container, Flex } from "@chakra-ui/react";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    !token ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Container centerContent>
          <Flex
            h={"100vh"}
            w={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner
              thickness="3px"
              speed="0.60s"
              emptyColor="gray.200"
              color="purple.400"
              size="xl"
            />
          </Flex>
        </Container>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
