import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSchool } from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <div className="flex flex-wrap">
        <div>
          <ul
            className="flex list-none flex-wrap pt-3 py-3 flex-row "
            role="tablist"
          >
            <li className="flex-auto text-center">
              <a
                className="text-[2rem] mb-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-secondary hover:text-primary focus:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Skills
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className="text-[2rem] ml-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-secondary hover:text-primary focus:text-primary max-sm:mr-0"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <FontAwesomeIcon icon={faSchool} className="pr-2" />
                Currently Learning
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col py-3 min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto  bg-accent text-secondary rounded-lg">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ul className="p-5 mx-auto w-full h-[425px] rounded-lg bg-accent text-secondary">
                    <li>
                      <FontAwesomeIcon
                        icon={faGitAlt}
                        className="text-primary icon"
                      />
                      Git /
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-primary  icon ml-3"
                      />
                      Github
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faHtml5}
                        className="text-[orange] icon"
                      />
                      HTML5
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        className="text-[#264de4] icon"
                      />
                      CSS
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faJs}
                        className="text-[yellow] icon"
                      />
                      Javascript
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faReact}
                        className="text-[#61DBFB] icon"
                      />
                      React
                    </li>
                    <li className="relative">
                      <Image
                        src="/icons/nextjs.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Next.js Brand Icon"
                      />
                      Next.js
                    </li>
                    <li>
                      <Image
                        src="/icons/tailwind.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Tailwind Css Icon"
                      />
                      Tailwind
                    </li>
                    <li>
                      <Image
                        src="/icons/responsive.png"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Responsive Icon - Internet icons created by Freepik - Flaticon"
                      />
                      Responsive Design
                    </li>
                  </ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ul className="p-5 mx-auto w-full h-[425px]">
                    <li>
                      <Image
                        src="/icons/typescript.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Typescript Brand Icon"
                      />
                      Typescript
                    </li>
                    <li>
                      <Image
                        src="/icons/redux.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Redux Brand Icon"
                      />
                      Redux
                    </li>
                    <li>
                      <Image
                        src="/icons/csharp.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="C# Brand Icon"
                      />
                      C# Language
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
