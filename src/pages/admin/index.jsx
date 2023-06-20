import React, { lazy } from "react";
import Dashboard from "../dashboard";
import Layout from "../layout";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import { RoutesWithNotFound } from "../../utils";

const Customers = lazy(() => import("../customers"));
const Plans = lazy(() => import("../plans"));
const Prospects = lazy(() => import("../prospects"));
const Offices = lazy(() => import("../offices"));
const Employees = lazy(() => import("../employees"));
const Products = lazy(() => import("../products"));
const Profile = lazy(() => import("../profile"));

const index = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.CLIENTS} element={<Customers />} />
        <Route path={PrivateRoutes.PLANS} element={<Plans />} />
        <Route path={PrivateRoutes.PROSPECTS} element={<Prospects />} />
        <Route path={PrivateRoutes.OFFICES} element={<Offices />} />
        <Route path={PrivateRoutes.EMPLOYEES} element={<Employees />} />
        <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />
        <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default index;
