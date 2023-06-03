import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { RequiredAuth, PersistLogin } from "./components";
import { HomeLayout } from "./pages";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Offices from "./pages/offices";
import Customers from "./pages/customers";
import Employees from "./pages/employees";
import Plans from "./pages/plans";
import Products from "./pages/products";
import Prospects from "./pages/prospects";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import Affiliations from "./pages/affiliations";
import Requests from "./pages/requests/index";
import Landing from "./pages/landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* PRIVATE ROUTES */}
      {/* Role user */}
      <Route element={<PersistLogin />}>
        <Route element={<RequiredAuth allowedRoles={["user"]} />}>
          <Route path="/user" element={<Layout />}>
            <Route path="affiliation" element={<Affiliations />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Role staff */}
        <Route element={<RequiredAuth allowedRoles={["staff"]} />}>
          <Route path="/staff" element={<Layout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="prospects" element={<Prospects />} />
            <Route path="requests" element={<Requests />} />
          </Route>
        </Route>

        {/* Role admin */}
        <Route element={<RequiredAuth allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="clients" element={<Customers />} />
            <Route path="plans" element={<Plans />} />
            <Route path="prospects" element={<Prospects />} />
            <Route path="offices" element={<Offices />} />
            <Route path="employees" element={<Employees />} />
            <Route path="products" element={<Products />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Route>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="landing" element={<Landing />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/unauthorized" element={<div>403 UNAUTHORIZED</div>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
