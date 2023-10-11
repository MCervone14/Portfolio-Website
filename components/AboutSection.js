import React from "react";
import SkillsChart from "./SkillsChart";

const about = () => {
  return (
    <section id="about">
      <div className="flex flex-col lg:flex-row justify-center max-w-screen-2xl mx-auto">
        <div className="flex flex-col px-5 w-full lg:w-1/2 mx-auto mb-10">
          <h2 className="text-5xl mb-5 text-title">About Me</h2>
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
          <h2 className="text-5xl mb-5 text-title">Hobbies</h2>
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
        <div className="lg:w-1/3 w-full px-5">
          <SkillsChart />
        </div>
      </div>
    </section>
  );
};

export default about;
