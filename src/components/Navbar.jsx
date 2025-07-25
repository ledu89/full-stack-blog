import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <ImageComponent
          urlEndpoint="https://ik.imagekit.io/ledu"
          src="logo.png"
          alt="logo"
          w={32}
          h={32}
        />
        <span>MernBlog</span>
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        {/* Hamburger Icon */}
        <div className=" cursor-pointer text-4xl">{open ? "X" : "☰"}</div>
        {/* Mobile MenuList */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute z-50 top-16 bg-primary transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          } gap-y-10 font-medium text-lg`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="rounded-3xl text-white py-2 px-4 bg-blue-800">
              Login{" "}
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className=" hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="rounded-3xl text-white py-2 px-4 bg-blue-800">
              Login{" "}
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
