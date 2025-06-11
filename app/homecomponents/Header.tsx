import React from "react";
import Image from "next/image";
import Button from "../components/Button";

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-5 bg-black">
      <Image src="/assets/logowhite.svg" width={30} height={30} alt="logo" />
      <div className="flex flex-row items-center gap-3">
        <div className="text-md bg-stone-700/50 items-center backdrop-blur-2xl rounded-full p-1.5 text-white font-light flex flex-row gap-3">
          <div className=" rounded-full  hover:bg-white hover:text-black  px-3 py-1">
            <p>Home</p>
          </div>
          <div className="rounded-full  hover:bg-white hover:text-black  px-3 py-1">
            <p>About</p>
          </div>
          <div className=" rounded-full  hover:bg-white hover:text-black  px-3 py-1">
            <p>Solutions</p>
          </div>
          <div className=" rounded-full  hover:bg-white hover:text-black px-3 py-1">
            <p>Projects</p>
          </div>
        </div>
        <Button
    icon="+"
    text="Contact"
  />
      </div>
    </div>
  );
};

export default Header;
