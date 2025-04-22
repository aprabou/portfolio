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
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: [
        "Lead a team of 5 developers to build and maintain a scalable SaaS platform serving 50,000+ users.",
        "Architected and implemented a microservices infrastructure that reduced system downtime by 75%.",
        "Introduced automated testing and CI/CD pipelines, improving deployment efficiency by 60%.",
        "Collaborated with product and design teams to define and implement new features based on user feedback.",
      ],
      isActive: true,
    },
    {
      title: "Software Engineer",
      company: "DataViz Solutions",
      location: "Austin, TX",
      period: "Jun 2019 - Dec 2021",
      description: [
        "Developed responsive web applications using React, TypeScript, and Node.js.",
        "Built RESTful APIs that handled 1M+ daily requests with 99.9% uptime.",
        "Optimized database queries, resulting in a 40% reduction in load times.",
        "Participated in agile development cycles with bi-weekly sprints and regular releases.",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Nexus",
      location: "Remote",
      period: "Sep 2017 - May 2019",
      description: [
        "Created responsive front-end interfaces using HTML, CSS, and JavaScript.",
        "Assisted in the development of a mobile app that achieved 100,000+ downloads.",
        "Collaborated with UX designers to implement intuitive user interfaces.",
        "Participated in code reviews and documentation of development processes.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Work Experience Coming Soon... (Open to work!)
        </SectionTitle>
      </div>
    </section>
  );
};
