import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const about = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row justify-evenly my-20 gap-40 p-10">
        <div className="flex flex-col">
          <h2 className="text-5xl mb-5">A little bit about me</h2>
          <p className="text-3xl mb-4 leading-relaxed">
            My passion is web development. I strive to keep learning in this
            ever-changing industry. Everyday, I push myself to keep improving.
            My expertise lies in frontend web development with HTML, CSS,
            Javascript, and React.
          </p>
          <p className="text-3xl mb-16 leading-relaxed">
            I chose React because it has a great ecosystem and a lot of
            community development. However, I still have aspirations of learning
            Vue and Angular frameworks as well as a plethora of other software
            technologies.
          </p>
          <h2 className="text-5xl mb-5">Hobbies</h2>
          <p className="text-3xl mb-4 leading-relaxed">
            If I&#39;m not learning about the web, I&#39;m learning about game
            development. Another goal of mine is to make a small indie game with
            Unreal Engine 5 or Unity. I am an avid PC gamer who really enjoys
            all types of games and always had an interest in learning game
            programming and design!
          </p>
          <p className="text-3xl mb-4 leading-relaxed">
            Hope you enjoyed my website, I would love to hear from you! My
            Resume and Github are in the footer at the bottom of the page. Thank
            you!
          </p>
        </div>
        <div className="mx-auto">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
