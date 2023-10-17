const skills = [
  { skill: "HTML5", level: 4 },
  { skill: "CSS3", level: 4 },
  { skill: "Javascript", level: 4 },
  { skill: "Typescript", level: 3 },
  { skill: "React", level: 4 },
  { skill: "Next.js", level: 4 },
  { skill: "Tailwind", level: 4 },
  { skill: "Git/Github", level: 4 },
];

const SkillsChart = () => {
  return (
    <div className="space-y-10 px-5 w-[75%]">
      <h2 className="text-title text-3xl">My Skills</h2>
      <div className="min-w-[330px]">
        {skills.map((skill) => {
          return (
            <div
              key={skill.skill}
              className="flex flex-col sm:flex-row justify-between mx-auto  md:gap-10 mb-10"
            >
              <p className="text-black text-3xl font-bold ">{skill.skill}</p>
              <div className="flex items-center  gap-2">
                {Array.from(Array(5), (_, i) => (
                  <div
                    key={i}
                    className={`h-6 w-6 bg-orange-500 rounded-full ${
                      i < skill.level ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsChart;
