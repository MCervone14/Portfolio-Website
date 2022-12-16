import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSchool,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

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
                className="text-[2rem] mb-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-secondary"
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
                className="text-[2rem] ml-2 max-sm:mr-0 mr-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-secondary"
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
                className="text-[2rem] font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-accent text-secondary"
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
                    <li>Git /Github</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ul className="p-5 mx-auto w-full h-[425px]">
                    <li>Typescript</li>
                    <li>React - Redux</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>GraphQL</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <ul className="p-5 mx-auto w-full h-[425px]">
                    <li>Vue </li>
                    <li>Angular</li>
                    <li>C# Language</li>
                    <li>C++</li>
                    <li>SQL</li>
                    <li>Figma</li>
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
