import { useStateContext } from "../contexts/ContextProvider";
import { useDeviceTracker } from "../hooks/useDeviceTracker";
import NavListAdmin from "./navList/NavListAdmin";
import NavListUser from "./navList/navListUser";
import { Logo } from "./";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/slices/authSlice";

const Sidebar = () => {
  const { role } = useSelector(selectCurrentUser);
  const { activeMenu, setActiveMenu } = useStateContext();
  const isMobile = useDeviceTracker(900);

  // this function automatically close the sidebar when the user clicks one of the links inside it
  const handleCloseSideBar = () => {
    if (activeMenu && isMobile) {
      setActiveMenu(false);
    }
  };

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
          {role === "admin" ? (
            <NavListAdmin handleCloseSideBar={handleCloseSideBar} />
          ) : (
            <NavListUser handleCloseSideBar={handleCloseSideBar} />
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;
