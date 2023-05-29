import React from "react";
import { BiUser } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import NavItem from "./NavItem";

const NavListUser = ({ handleCloseSideBar }) => {
  const items = [
    {
      title: "menu",
      links: [
        {
          name: "affiliation",
          icon: <RiFileList2Line />,
        },
      ],
    },
    {
      title: "settings",
      links: [
        {
          name: "profile",
          icon: <BiUser />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="mt-10">
        {items.map(({ title, links }) => {
          return (
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">{title}</p>
              {links.map(({ name, icon }) => {
                return (
                  <NavItem
                    to={name}
                    handleAction={handleCloseSideBar}
                    linkName={name}
                  >
                    {icon}
                  </NavItem>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavListUser;
