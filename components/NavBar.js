import Image from "next/image";
import React from "react";
import { NavLink } from "../utility/NavLink";

const NavBar = () => {
  return (
    <nav className="bg-primary text-accent navbar border-b-[3px] border-[tomato] py-10 z-0 w-full flex items-center justify-center uppercase font-[droid_serifbold]">
      <div>
        <NavLink
          className="mx-7 effect-shine font-bold text-3xl"
          exact
          href="/"
        >
          Home
        </NavLink>
        <NavLink className="ml-7 font-bold text-3xl effect-shine" href="/about">
          About
        </NavLink>
      </div>
      <div></div>
    </nav>
  );
};

export default NavBar;
