import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import { links } from "./NavBar";

const Footer = () => {
  return (
    <footer className=" bg-gray-400 text-accent border-t-[3px] border-accent mt-20 flex flex-col items-center justify-center uppercase font-[droid_serifbold]">
      <div
        className="flex flex-col items-center justify-center py-10"
        id="contact"
      >
        <div className="py-10">
          <Logo />
        </div>
        <div className="flex gap-10 py-10">
          {links
            .map((link) => (
              <Link
                className="text-xl text-slate-800 hover:text-accent"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))
            .slice(0, 2)}
        </div>
        <div className="flex items-center justify-center gap-20">
          <Link href="https://github.com/MCervone14" aria-label="Github">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-2x text-black hover:text-accent"
            />
          </Link>
          <Link
            href="./MGC_Resume_10_2023.pdf"
            target="_blank"
            aria-label="Resume"
          >
            <FontAwesomeIcon
              icon={faFile}
              className="text-[2rem] fa-2x text-black hover:text-accent"
            />
          </Link>
        </div>
      </div>
      <div className="bg-slate-700 h-[65px] w-full flex justify-center items-center">
        <p className="text-center text-xl font-bold">
          &copy; {new Date().getFullYear()} Michael Cervone
        </p>
      </div>
    </footer>
  );
};

export default Footer;
