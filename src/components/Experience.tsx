import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  isActive?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  isActive = false,
}) => {
  return (
    <div
      className={`p-6 rounded-lg ${
        isActive
          ? "bg-blue-50 dark:bg-blue-900/20"
          : "bg-gray-50 dark:bg-gray-700"
      } shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {company}
          </p>
        </div>
        <div className="mt-2 sm:mt-0">
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {description.map((item, index) => (
          <li key={index} className="flex">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Perfint Healthcare",
      location: "Remote",
      period: "Jan 2025 - Present",
      description: [
        "Engineered a C++ shortest-path routing algorithm for MAXIO®, enhancing instrument-path accuracy by 15% and accelerating pre-operative planning 3x, enabling faster, more precise CT-guided interventions",
        "Integrated the new algorithm into MAXIO®’s software pipeline—synchronizing with respiratory gating and multi-series image registration—to provide reliable, real-time intraoperative guidance",
        "Collaborated in agile sprints with clinical engineers and software teams, leading weekly demos and code reviews to refine requirements and fast-track validation against regulatory standards",
      ],
      isActive: true,
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                period={experience.period}
                description={experience.description}
                isActive={experience.isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
