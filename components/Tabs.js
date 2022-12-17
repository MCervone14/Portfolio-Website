import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSchool,
  faGraduationCap,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faBootstrap,
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
  const [selected, setSelected] = React.useState(false);
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
                className="text-[2rem] ml-2 max-sm:mr-0 mr-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-secondary hover:text-primary focus:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon> Learning
              </a>
            </li>
            <li className="-mb-px flex-auto text-center">
              <a
                className="text-[2rem] font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-secondary  hover:text-primary focus:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>{" "}
                Future Learning
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
                        src="/icons/gatsby.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Gatsby Brand Icon"
                      />
                      Gatsby
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
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        className="text-[#7952b3] icon"
                      />
                      Bootstrap
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
                        src="/icons/nodejs.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Node.js Brand Icon"
                      />
                      Node.js
                    </li>
                    <li>
                      <Image
                        src="/icons/express.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Express Brand Icon"
                      />
                      Express
                    </li>
                    <li>
                      <Image
                        src="/icons/graphql.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="GraphQL Brand Icon"
                      />
                      GraphQL
                    </li>
                    <li>
                      <Image
                        src="/icons/firebase.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="Firebase Brand Icon"
                      />
                      Firebase
                    </li>
                  </ul>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <ul className="p-5 mx-auto w-full h-[425px]">
                    <li>
                      <FontAwesomeIcon
                        icon={faVuejs}
                        className="text-[#34495e] icon"
                      />
                      Vue{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faAngular}
                        className="text-[#B52E31] icon"
                      />
                      Angular
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
                    <li>
                      <Image
                        src="/icons/cplusplus.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="C++ Brand Icon"
                      />
                      C++
                    </li>
                    <li>
                      <Image
                        src="/icons/sql.svg"
                        width={20}
                        height={20}
                        className="inline-block icon"
                        alt="SQL Icon"
                      />
                      SQL
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faFigma}
                        className="text-[#b67148] icon"
                      />
                      Figma
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
