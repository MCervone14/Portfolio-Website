import Image from "next/image";
import { skillIcons, skillImages } from "../Helpers/Icons";
import TabItem from "./TabItem";

const Sidebar = () => {
  return (
    <div className="border-2 mx-auto rounded-2xl w-[320px] h-auto bg-accent text-[black]">
      <h3 className="p-10 font-bold text-4xl border-b-2">Technology Skills</h3>
      <div>
        <ul className="p-10 mx-auto text-[black] flex flex-col gap-2 justify-center">
          {skillIcons.map((skill, index) => (
            <li key={index} className="flex">
              <div>
                <TabItem icon={skill.icon} styles={skill.styles} />
              </div>
              <div>{skill.name}</div>
            </li>
          ))}
          {skillImages.map((skill, index) => (
            <li className="flex" key={index}>
              <div>
                <Image
                  src={skill.icon}
                  width={20}
                  height={20}
                  className="inline-block icon"
                  alt={skill.credit}
                />
              </div>
              <div>{skill.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
