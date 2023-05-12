import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";
import { BASE_URL } from "../config/config";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const {
      data: {
        token,
        data: { user },
      },
    } = await axios.get(`${BASE_URL}/user/refreshToken`, {
      withCredentials: true,
    });
    const transformResponse = { token, user };
    dispatch(setCredentials(transformResponse));
    return transformResponse;
  };
  return refresh;
};

export default useRefreshToken;
