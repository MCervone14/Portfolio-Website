import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary fixed bottom-0 w-full text-accent border-t-[3px] border-[tomato] py-5 flex items-center justify-center uppercase font-[droid_serifbold]">
      <div className="flex items-center gap-12">
        <h2 className="uppercase font-bold text-[1.5rem]">
          Contact Information:
        </h2>
        <Link href="https://github.com/MCervone14">
          <FontAwesomeIcon icon={faGithub} className="text-[2rem]" />
        </Link>
        <Link passHref href="mailto:MCervone14@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="text-[2rem]" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
