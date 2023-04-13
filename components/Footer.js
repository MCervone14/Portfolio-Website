import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary w-full text-accent border-t-[3px] border-accent my-10 py-20 flex items-center justify-center uppercase font-[droid_serifbold]">
      <div className="flex items-center gap-12">
        <p className="uppercase font-bold text-[2rem]">Contact Information:</p>
        <Link href="https://github.com/MCervone14">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[2rem] effect-shine"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
