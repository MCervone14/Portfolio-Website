import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project: { title, image, code, website, desc } }) => {
  return (
    <div className="rounded-xl bg-lightPrimary border-[1px] border-lightPrimary h-[500px] max-w-[375px] relative">
      <div>
        <Image
          src={image}
          alt={title}
          width={375}
          height={275}
          className="rounded-lg rounded-b-none object-cover min-h-[200px]"
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
            className="bg-primary text-4xl border-2 text-secondary hover:border-[black] hover:shadow-lg  py-3 px-5 rounded-xl flex items-center justify-ar gap-3 shadow-lg"
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
              className=" bg-primary text-4xl border-2 text-secondary hover:border-[black] py-3 px-5 rounded-xl flex items-center justify-ar gap-3 shadow-lg"
            >
              <FontAwesomeIcon icon={faCode} className="mr-2 text-accent" />
              Code
            </Link>
          ) : (
            <div>
              <p className="absolute w-full bottom-0 text-right text-[#fff]">
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
