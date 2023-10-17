import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";

export const links = [
  { href: "#", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <nav className="bg-primary text-secondary navbar h-[100px] w-full flex items-center justify-around font-[droid_serifbold] ">
      <div className="hidden lg:block">
        <Logo />
      </div>
      <ul className="hidden md:flex flex-row justify-center text-lg items-center space-x-20">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href} className="hover:text-accent">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <DropdownMenu links={links} />
      </div>

      <Link
        href="./MGC_Resume_10_2023.pdf"
        target="_blank"
        className="bg-title hover:text-accent rounded-md text-lg px-6 py-4"
      >
        Download CV
      </Link>
    </nav>
  );
};

export default NavBar;
