import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/slices/authSlice";
import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import {  Spinner, Container } from "@chakra-ui/react";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !token ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Container centerContent h="calc(100vh)">
          <Spinner
            thickness="3px"
            speed="0.60s"
            emptyColor="gray.200"
            color="purple.400"
            size="xl"
          />
        </Container>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
