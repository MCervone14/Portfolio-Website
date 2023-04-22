import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-primary text-secondary navbar border-b-[3px] border-accent py-10 z-0 w-full flex items-center justify-center uppercase font-[droid_serifbold]">
      <div>
        <Link
          className="mx-7 effect-shine font-bold text-3xl hover:text-accent"
          href="/"
        >
          Home
        </Link>
        <Link
          className="ml-7 font-bold text-3xl hover:text-accent"
          href="/about"
        >
          About
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default NavBar;
