import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project: { title, image, code, website, desc } }) => {
  return (
    <div className="rounded-xl bg-lightPrimary border-[#000] border-[2px] h-[600px] relative max-w-[600px]">
      <div>
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="rounded-lg rounded-b-none"
        />
      </div>
      <div className="">
        <h3 className="p-10 font-bold text-4xl text-secondary">{title}</h3>
        <p className="px-10 py-3 whitespace-normal text-secondary text-3xl leading-10">
          {desc}
        </p>
        <div className="absolute bottom-0 left-0 p-10 flex gap-5">
          <Link href={website} target="_blank" className="text-3xl">
            <button className="bg-primary text-4xl border-2 text-secondary hover:border-accent hover:shadow-lg  py-3 px-5 rounded-xl flex items-center justify-ar gap-3 shadow-lg">
              <FontAwesomeIcon
                icon={faWindowMaximize}
                className="mr-2  text-accent stroke-[#000] stroke-[20px]"
              />
              Website
            </button>
          </Link>
          <Link href={code} target="_blank" className="text-3xl">
            <button className="bg-primary text-4xl border-2 text-secondary hover:border-accent py-3 px-5 rounded-xl flex items-center justify-ar gap-3 shadow-lg">
              <FontAwesomeIcon
                icon={faCode}
                className="mr-2 text-accent stroke-[#000] stroke-[20px]"
              />
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
