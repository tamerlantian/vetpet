import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../../contexts/ContextProvider";
import { useDeviceTracker } from "../../hooks/useDeviceTracker";
import { useDisclosure } from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";
import DrawerOptions from "./DrawerOptions";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      ></span>
      {icon}
    </button>
  </TooltipComponent>
);

const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useDeviceTracker(900);
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } =
    useStateContext();

  // this effect is watching for changes in the screenSize to apply the changes to the activemenu variable
  useEffect(() => {
    if (isMobile) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [isMobile]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prevActiveMenu) => !prevActiveMenu);
        }}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <ProfileMenu onOpen={onOpen} />
        <DrawerOptions isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};

export default Topbar;
