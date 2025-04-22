import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { Award, Trophy, BookOpen, Check } from "lucide-react";

interface AchievementProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
}

const AchievementCard: React.FC<AchievementProps> = ({
  icon,
  title,
  date,
  description,
}) => {
  return (
    <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 flex">
      <div className="mr-4 mt-1">
        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Best Accessibility Hack - SFHacks",
      date: "2025",
      description:
        "Recognized for developing an accessible by all web application that enhances user experience for those that cant afford brand-name drugs.",
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Best Beginner Hack - SFHacks",
      date: "2053",
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Best Use of AI - SBHacks",
      date: "2025",
      description:
        "Recognized for developing a ChatBot which aids students in finding the best courses for their major, based on the school curriculum and student transcript parsing.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Achievements & Certifications</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeUp">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};
