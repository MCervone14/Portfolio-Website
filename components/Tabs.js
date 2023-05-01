import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSchool } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import TabItem from "./TabItem";

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
                className="text-[2rem] mb-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-primary hover:text-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div>
                  <FontAwesomeIcon
                    icon={faBook}
                    className="pr-2"
                  ></FontAwesomeIcon>
                  Skills
                </div>
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className="text-[2rem] ml-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-primary hover:text-secondary max-sm:mr-0"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <span>
                  <FontAwesomeIcon icon={faSchool} className="pr-2" />
                  Learning
                </span>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col py-3 min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-5 py-5 flex-auto  bg-accent text-secondary rounded-lg">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ul className="p-5 mx-auto w-full h-[425px] rounded-lg bg-accent text-primary flex flex-col justify-around">
                    {skillIcons.map((skill, index) => (
                      <li key={index}>
                        <TabItem icon={skill.icon} styles={skill.styles}>
                          {skill.name}
                        </TabItem>
                      </li>
                    ))}
                    {skillImages.map((skill, index) => (
                      <li className="relative" key={index}>
                        <Image
                          src={skill.icon}
                          width={20}
                          height={20}
                          className="inline-block icon"
                          alt={skill.credit}
                        />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ul className="p-5 mx-auto w-full h-[425px] text-primary">
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
