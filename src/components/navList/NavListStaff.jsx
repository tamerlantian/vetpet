import { BiUser } from "react-icons/bi";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { CiViewList } from "react-icons/ci";
import NavItem from "./NavItem";

const NavListStaff = ({ handleCloseSideBar }) => {
  const items = [
    {
      title: "menu",
      links: [
        {
          name: "prospects",
          icon: <HiOutlineUserPlus />,
        },
        {
          name: "requests",
          icon: <CiViewList />,
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
            <div key={title}>
              <p className="text-gray-400 m-3 mt-4 uppercase">{title}</p>
              {links.map(({ name, icon }) => {
                return (
                  <NavItem
                    key={name}
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

export default NavListStaff;
