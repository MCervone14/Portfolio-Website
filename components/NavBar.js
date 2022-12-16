import Image from "next/image";
import React from "react";
import { NavLink } from "../utility/NavLink";

const NavBar = () => {
  return (
    <nav className="bg-primary text-accent navbar border-b-[3px] border-[tomato] py-5 z-0 w-full flex items-center justify-center uppercase font-[droid_serifbold]">
      <div>
        <NavLink className="mx-7" exact href="/">
          Home
        </NavLink>
        <NavLink className="mx-7 scroll-smooth" passHref href="/#project">
          Projects
        </NavLink>
        <NavLink className="ml-7" href="/about">
          About
        </NavLink>
      </div>
      <div></div>
    </nav>
  );
};

export default NavBar;
