import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary w-full text-accent border-t-[3px] border-accent my-10 py-20 flex items-center justify-center uppercase font-[droid_serifbold]">
      <div className="flex flex-wrap items-center gap-12">
        <p className="uppercase font-bold text-[3rem]">Contact Information:</p>
        <Link
          href="https://github.com/MCervone14"
          className="text-3xl font-bold text-secondary border-2 hover:border-accent px-5 py-2 rounded-xl flex items-center gap-3 bg-lightPrimary"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[2rem] fa-2x text-accent stroke-[#000] stroke-[20px]"
          />
          My GitHub
        </Link>
        <Link
          href="./MGC_Resume_2023.pdf"
          target="_blank"
          className="text-3xl font-bold border-2 hover:border-accent text-secondary px-5 py-2 rounded-xl flex items-center gap-3 bg-lightPrimary"
        >
          <FontAwesomeIcon
            icon={faFile}
            className="text-[2rem] fa-2x text-accent stroke-[#000] stroke-[20px]"
          />
          My Resume
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
