import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project: { title, image, code, website, desc } }) => {
  return (
    <div className="rounded-xl bg-accent h-[400px] relative max-w-[350px]">
      <Image
        src={image}
        alt={title}
        width={350}
        height={400}
        className="rounded-lg rounded-b-none"
      />
      <div className="">
        <h3 className="p-5 text-center font-bold text-secondary">{title}</h3>
        <p className="px-10 py-3 whitespace-normal text-xl">{desc}</p>
        <div className="absolute bottom-0 left-0 p-10 flex">
          <Link href={website} target="_blank" className="text-4xl">
            <div className="effect-shine">
              <FontAwesomeIcon icon={faWindowMaximize} className="mr-2" />
              <span className="text-secondary font-bold mr-10 effect-shine">
                Website
              </span>
            </div>
          </Link>
          <Link href={code} target="_blank" className="text-4xl">
            <div className="effect-shine">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              <span className="font-bold text-secondary hover:font-gray effect-shine">
                Code
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
