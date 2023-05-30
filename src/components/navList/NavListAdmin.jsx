import React from "react";
import { BiHomeSmile, BiUser } from "react-icons/bi";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import NavItem from "./NavItem";

const NavListAdmin = ({
  handleCloseSideBar,
}) => {
  const items = [
    {
      title: "home",
      links: [
        {
          name: "dashboard",
          icon: <BiHomeSmile />,
        },
      ],
    },
    {
      title: "users",
      links: [
        {
          name: "clients",
          icon: <BsPeople />,
        },
        {
          name: "employees",
          icon: <AiOutlineIdcard />,
        },
        {
          name: "prospects",
          icon: <HiOutlineUserPlus />,
        },
      ],
    },
    {
      title: "business",
      links: [
        {
          name: "products",
          icon: <IoCartOutline />,
        },
        {
          name: "offices",
          icon: <FiMapPin />,
        },
        {
          name: "plans",
          icon: <IoPricetagOutline />,
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

export default NavListAdmin;