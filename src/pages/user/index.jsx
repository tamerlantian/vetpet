import React from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import Affiliations from "../affiliations";
import Profile from "../profile";
import Layout from "../layout";
import { RoutesWithNotFound } from "../../utils";

const index = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={PrivateRoutes.AFFILIATION} />} />
        <Route path={PrivateRoutes.AFFILIATION} element={<Affiliations />} />
        <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default index;
