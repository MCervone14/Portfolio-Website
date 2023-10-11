import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project: { title, image, code, website, desc } }) => {
  return (
    <div className="rounded-xl bg-slate-600 border-2 border-slate-800 h-[500px] max-w-[450px] relative">
      <div>
        <Image
          src={image}
          alt={title}
          width={450}
          height={275}
          className="rounded-lg rounded-b-none object-cover min-h-[225px]"
        />
      </div>
      <div className="">
        <h3 className="p-10 font-bold text-4xl text-secondary">{title}</h3>
        <p className="px-10  whitespace-normal text-secondary text-3xl leading-10">
          {desc}
        </p>
        <div className="absolute p-2 flex gap-5 bottom-3 left-3 ">
          <Link
            href={website}
            target="_blank"
            className="bg-[#1C1E53] text-3xl text-secondary hover:text-accent px-4 py-2 rounded-lg flex items-center justify-around"
          >
            <FontAwesomeIcon
              icon={faWindowMaximize}
              className="mr-2  text-accent"
            />
            Website
          </Link>

          {code !== "" ? (
            <Link
              href={code}
              target="_blank"
              className=" bg-[#1C1E53] text-3xl text-secondary hover:text-accent px-4 py-2 rounded-lg flex items-center justify-around"
            >
              <FontAwesomeIcon icon={faCode} className="mr-2 text-accent" />
              Docs
            </Link>
          ) : (
            <div>
              <p className="absolute w-full bottom-0 text-right text-white">
                *Code Available on Request
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
