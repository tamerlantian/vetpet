import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ linkName, children, to, handleAction }) => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gray-400";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <NavLink
      to={to}
      onClick={handleAction}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      {children}
      <span className="capitalize">{linkName}</span>
    </NavLink>
  );
};

export default NavItem;
