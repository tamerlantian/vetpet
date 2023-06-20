import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../store/slices/authSlice";
import { PublicRoutes } from "../models/routes";

const AuthGuard = ({ allowedRoles }) => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return allowedRoles?.includes(user?.role) ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to={PublicRoutes.LOGIN} state={{ from: location }} replace />
  );
};

export default AuthGuard;
