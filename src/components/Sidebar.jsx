import { NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BiHomeSmile } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { IoPricetagOutline } from "react-icons/io5";
import { useStateContext } from "../contexts/ContextProvider";
import { IoCartOutline } from "react-icons/io5";
import { Logo } from "./";
import { useScreenSize } from "../hooks/useScreenSize";
import { useDeviceTracker } from "../hooks/useDeviceTracker";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const { activeMenu, setActiveMenu } = useStateContext();
  const isMobile = useDeviceTracker(900);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // this function automatically close the sidebar when the user clicks one of the links inside it
  const handleCloseSideBar = () => {
    if (activeMenu && isMobile) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Logo
              action={handleCloseSideBar}
              classname="ml-3 mt-4 text-xl"
              linkTo="/home"
            />
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">home</p>
              <NavLink
                to="dashboard"
                onClick={handleCloseSideBar}
                className={false ? activeLink : normalLink}
              >
                <BiHomeSmile />
                <span className="capitalize">dashboard</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">users</p>
              <NavLink
                to="clients"
                onClick={handleCloseSideBar}
                className={false ? activeLink : normalLink}
              >
                <BsPeople />
                <span className="capitalize">clients</span>
              </NavLink>
              <NavLink
                to="employees"
                onClick={handleCloseSideBar}
                className={false ? activeLink : normalLink}
              >
                <AiOutlineIdcard />
                <span className="capitalize">employees</span>
              </NavLink>
              <NavLink
                to="prospects"
                onClick={handleCloseSideBar}
                className={false ? activeLink : normalLink}
              >
                <HiOutlineUserPlus />
                <span className="capitalize">prospects</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">Business</p>
              <NavLink
                to="products"
                onClick={handleCloseSideBar}
                className={false ? activeLink : normalLink}
              >
                <IoCartOutline />
                <span className="capitalize">products</span>
              </NavLink>
              <NavLink
                to="offices"
                onClick={handleCloseSideBar}
                className={false ? activeLink : normalLink}
              >
                <FiMapPin />
                <span className="capitalize">offices</span>
              </NavLink>
              <NavLink
                to="plans"
                onClick={handleCloseSideBar}
                className={false ? activeLink : normalLink}
              >
                <IoPricetagOutline />
                <span className="capitalize">plans</span>
              </NavLink>
            </div>
          </div>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
