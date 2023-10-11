import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={"/logo.svg"} width={141} height={41} alt="logo" />
    </div>
  );
};

export default Logo;
