import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
  affiliations?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  period,
  description,
  achievements = [],
  affiliations = [],
}) => {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start">
        <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {institution}
              </p>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-2 sm:mt-0">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{period}</span>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          {affiliations.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center mb-2">
                <Award className="h-4 w-4 mr-2 text-amber-500" />
                Affiliations
              </h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                {affiliations.map((affiliation, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2">•</span>
                    <span>{affiliation}</span>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center mb-2">
                <Award className="h-4 w-4 mr-2 text-amber-500" />
                Achievements
              </h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  const educationItems = [
    {
      degree: "B.S. in Computer Science, Minor in Statistics",
      institution: "University of California, Santa Cruz",
      period: "2023 - 2027",
      description:
        "Comprehensive foundation in Software Development, Algorithms, and System Design & Architecture.",
      achievements: ["Dean's List"],
      affiliations: ["SlugAI", "Santa Cruz Artificial Intelligence"],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>

        <div className="mt-12 space-y-8 animate-fadeUp">
          {educationItems.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
