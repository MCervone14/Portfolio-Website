import React from "react";
import Sidebar from "../components/Sidebar";

const about = () => {
  return (
    <>
      <div className="flex lg:m-[2.5rem] py-[7rem] justify-evenly items-center w-full h-full max-lg:flex-col">
        <div className="w-1/3 max-lg:w-2/3 max-sm:w-[75%]">
          <h1 className="text-[4rem] mb-5">
            I&#39;m Michael, a web developer.
          </h1>
          <p className="text-[1.5rem] mb-[1rem]">
            My passion is web development. I strive to keep learning in this
            ever-changing industry. Everyday, I push myself to keep improving.
            My expertise lies in frontend web development with HTML, CSS,
            Javascript, and React.
          </p>
          <p className="text-[1.5rem] mb-[1rem]">
            I chose React because it has a great ecosystem and a lot of
            community development. However, I still have aspirations of learning
            Vue and Angular frameworks as well as a plethora of other software
            technologies.
          </p>
          <h2 className="text-[2.5rem] mb-5">Hobbies</h2>
          <p className="text-[1.5rem] mb-[1rem]">
            If I&#39;m not learning about the web, I&#39;m learning about game
            development. Another goal of mine is to make a small indie game with
            Unreal Engine 5 or Unity. I am an avid PC gamer who really enjoys
            all types of games and always had an interest in learning game
            programming and design!
          </p>
          <p className="text-[1.5rem] mb-[1rem]">
            Hope you enjoyed my website, I would love to hear from you!
          </p>
        </div>
        <div className="max-sm:w-[75%] mt-10">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default about;
