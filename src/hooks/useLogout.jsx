import axios from "axios";
import { useDispatch } from "react-redux";
import { logOut } from "../store/slices/authSlice";
import { resetState } from "../store/slices/petsSlice";
import { BASE_URL } from "../config/config";
import useToastMsg from "./useToastMsg";

const useLogout = () => {
  const dispatch = useDispatch();
  const toastMsg = useToastMsg();

  const logout = async () => {
    dispatch(logOut());
    try {
      await axios.post(`${BASE_URL}/user/logout`, null, {
        withCredentials: "true",
      });
      dispatch(resetState());
      toastMsg("Logged out successfully", "success");
    } catch (error) {
      toastMsg("An error ocurred", "error");
    }
  };

  return logout;
};

export default useLogout;
