import { RoutesWithNotFound } from "../../utils";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import Prospects from "../prospects";
import Requests from "../requests";
import Profile from "../profile";
import Layout from "../layout";

const index = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={PrivateRoutes.PROSPECTS} />} />
        <Route path={PrivateRoutes.PROSPECTS} element={<Prospects />} />
        <Route path={PrivateRoutes.REQUESTS} element={<Requests />} />
        <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default index;
