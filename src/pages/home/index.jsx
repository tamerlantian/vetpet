import React from "react";
import { RoutesWithNotFound } from "../../utils";
import { PublicRoutes } from "../../models/routes";
import Forbbiden from "../../components/Forbbiden";
import Landing from "../landing";
import { Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const index = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path={PublicRoutes.LANDING} element={<Landing />} />
        <Route path={PublicRoutes.UNAUTHORIZED} element={<Forbbiden />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default index;
