import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { Code, Lightbulb, Users, Puzzle } from "lucide-react";

export const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Technical Expertise",
      description:
        "Proficient in modern development tools and frameworks with a passion for clean, maintainable code.",
    },
    {
      icon: <Puzzle className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      title: "Problem Solver",
      description:
        "Analytical thinker who enjoys tackling complex challenges and finding efficient solutions.",
    },
    {
      icon: (
        <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Team Collaborator",
      description:
        "Effective communicator who thrives in collaborative environments and values diverse perspectives.",
    },
    {
      icon: (
        <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      ),
      title: "Creative Innovator",
      description:
        "Combines technical skills with creativity to develop unique and effective solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fadeRight">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate Learner and Software Engineer with experience
                building web applications that solve real-world problems. My
                journey in technology began with a curiosity about how things
                work, which evolved into a career creating intuitive and
                efficient digital solutions.
              </p>
              <p>
                I specialize in full-stack development with expertise in React,
                Node.js, and Python technologies. My approach combines technical
                skills with a strong focus on user experience and business
                objectives.
              </p>
              <p>
                When I'm not coding, you'll find me at pickup basketball games,
                reading about new technologies, or contributing to open-source
                projects. I believe in continuous learning and sharing knowledge
                with the community.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 inline-block font-medium"
              >
                Let's Connect
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeLeft">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
