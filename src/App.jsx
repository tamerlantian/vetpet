import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { RequiredAuth, PersistLogin } from "./components";
import {
  DashboardLayout,
  HomeLayout,
  Login,
  Clients,
  Dashboard,
  Employees,
  Offices,
  Plans,
  Prospects,
  Products,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* PRIVATE ROUTES */}
      <Route element={<PersistLogin />}>
        <Route element={<RequiredAuth allowedRoles={["admin"]} />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="plans" element={<Plans />} />
            <Route path="prospects" element={<Prospects />} />
            <Route path="offices" element={<Offices />} />
            <Route path="clients" element={<Clients />} />
            <Route path="employees" element={<Employees />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Route>
      </Route>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<HomeLayout />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<div>403 UNAUTHORIZED</div>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
