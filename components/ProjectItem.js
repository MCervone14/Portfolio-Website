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
          width={400}
          height={450}
          className="rounded-lg rounded-b-none"
        />
      </div>
      <div className="">
        <h3 className="p-10 font-bold text-4xl text-secondary">{title}</h3>
        <p className="px-10  whitespace-normal text-secondary text-3xl leading-10">
          {desc}
        </p>
        <div className="absolute bottom-0 left-0 p-10 flex gap-5">
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
          <Link
            href={code}
            target="_blank"
            className=" bg-primary text-4xl border-2 text-secondary hover:border-[black] py-3 px-5 rounded-xl flex items-center justify-ar gap-3 shadow-lg"
          >
            <FontAwesomeIcon icon={faCode} className="mr-2 text-accent" />
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
