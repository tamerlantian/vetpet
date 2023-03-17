import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer, Sidebar } from "./components";
import {
  Clients,
  Dashboard,
  Employees,
  Offices,
  Plans,
  Prospects,
  Products,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-main-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Pages */}
                <Route path="/plans" element={<Plans />} />
                <Route path="/prospects" element={<Prospects />} />
                <Route path="/offices" element={<Offices />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
