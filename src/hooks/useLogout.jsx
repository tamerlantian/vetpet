import axios from "axios";
import { useDispatch } from "react-redux";
import { logOut } from "../store/slices/authSlice";
import { BASE_URL } from "../config/config";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(logOut());
    try {
      await axios.post(`${BASE_URL}/user/logout`, null, {
        withCredentials: "true",
      });
    } catch (error) {}
  };

  return logout;
};

export default useLogout;
