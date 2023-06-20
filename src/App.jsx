import { Suspense, lazy } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { PersistLogin, FallbackSpinner } from "./components";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import { AuthGuard } from "./guards";
import { RoutesWithNotFound } from "./utils";
import Home from "./pages/home";

const Login = lazy(() => import("./pages/login"));
const ResetPassword = lazy(() => import("./pages/resetPassword"));
const ForgotPassword = lazy(() => import("./pages/forgotPassword"));
const Signup = lazy(() => import("./pages/signup"));
const Admin = lazy(() => import("./pages/admin"));
const Staff = lazy(() => import("./pages/staff"));
const User = lazy(() => import("./pages/user"));

const App = () => {
  return (
    <Suspense fallback={<FallbackSpinner />}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/*" element={<Home />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route
            path={PublicRoutes.RESETPASSWORD}
            element={<ResetPassword />}
          />
          <Route
            path={PublicRoutes.FORGOTPASSWORD}
            element={<ForgotPassword />}
          />
          <Route path={PublicRoutes.SIGNUP} element={<Signup />} />

          <Route element={<PersistLogin />}>
            <Route element={<AuthGuard allowedRoles={["admin"]} />}>
              <Route path={`${PrivateRoutes.ADMIN}/*`} element={<Admin />} />
            </Route>

            <Route element={<AuthGuard allowedRoles={["staff"]} />}>
              <Route path={`${PrivateRoutes.STAFF}/*`} element={<Staff />} />
            </Route>

            <Route element={<AuthGuard allowedRoles={["user"]} />}>
              <Route path={`${PrivateRoutes.USER}/*`} element={<User />} />
            </Route>
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
