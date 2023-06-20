import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/slices/authSlice";
import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import FallbackSpinner from "./ui/FallbackSpinner";

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

  return <>{isLoading ? <FallbackSpinner /> : <Outlet />}</>;
};

export default PersistLogin;
