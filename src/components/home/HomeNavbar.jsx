import { Logo } from "../";
import { HamburguerButton, Links } from "../../components";
import { Link } from "react-router-dom";
import { useDeviceTracker } from "../../hooks/useDeviceTracker";

const HomeNavbar = () => {
  const isMobile = useDeviceTracker(900);

  return (
    <div className="flex flex-col justify-between items-center p-4 gap-5 shadow-xl">
      <div className="flex items-center justify-between w-full">
        <Logo classname="text-xl" linkTo="/" />
        <p>
          <span className="font-bold">Open: </span>7:00 - 17:00{" "}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        {isMobile ? (
          <HamburguerButton />
        ) : (
          <Links style="flex flex-row gap-4" />
        )}
        <Link to="login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
