import React, { useState } from "react";
import { Image } from "@imagekit/react";
import ImageComponent from "./ImageComponent";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(import.meta.env.VITE_IK_URL_ENDPOINT);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <ImageComponent
          urlEndpoint="https://ik.imagekit.io/ledu"
          src="logo.png"
          alt="logo"
          w={32}
          h={32}
        />
        <span>MernBlog</span>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        {/* Hamburger Icon */}
        <div className=" cursor-pointer text-4xl">{open ? "X" : "☰"}</div>
        {/* Mobile MenuList */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-primary transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          } gap-y-10 font-medium text-lg`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="rounded-3xl text-white py-2 px-4 bg-blue-800">
              Login{" "}
            </button>
          </a>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className=" hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="rounded-3xl text-white py-2 px-4 bg-blue-800">
            Login{" "}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
