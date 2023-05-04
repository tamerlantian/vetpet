import React from "react";

const Hero = () => {
  return (
    <div className="relative text-white font-bold">
      <div className="hero__filter">
        <div className="absolute top-1/2 left-1/2 max-w-xl flex flex-col items-start gap-5">
          <h1 className="text-4xl sm:text-4xl">Happy pets make happy owners</h1>
          <a className="btn">Contact us</a>
        </div>
      </div>
      <img
        src="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/06/cat-and-dog-top.jpg"
        alt=""
        className="hero__img"
      />
    </div>
  );
};

export default Hero;
