import React from "react";
import { Link } from "react-router-dom";
import { SiBaidu } from "react-icons/si";

const Logo = ({ action, classname, linkTo }) => {
  return (
    <>
      <Link
        to={linkTo}
        onClick={action}
        className={`${
          !classname ? "" : classname
        } flex items-start gap-3 font-extrabold tracking-tight text-slate-900`}
      >
        <SiBaidu /> <span>VetPet</span>
      </Link>
    </>
  );
};

export default Logo;
