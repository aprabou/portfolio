import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-2 transition-colors duration-300"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-700 hover:bg-gray-800 rounded-full p-2 transition-colors duration-300"
              aria-label={`View GitHub repository of ${title}`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "RightsNow",
      description:
        "A quick and reliable way to understand your rights in stressful situations. Understand your freedoms, right here, RightsNow.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/374/058/datas/medium.png",
      tags: ["React", "Node.js", "Python", "Flask"],
      demoUrl: "https://devpost.com/software/rightsnow",
      repoUrl: "https://github.com/ashwinprabou/RightsNow",
    },
    {
      title: "Pill Penny",
      description:
        "Accessible and affordable healthcare for all. Pill Penny is a web application that helps you find the best prices for your medications.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/357/929/datas/medium.png",
      tags: ["React Native", "Firebase", "Redux", "Machine Learning"],
      demoUrl: "https://devpost.com/software/pill-penny",
      repoUrl: "https://github.com/example/fitness-app",
    },
    {
      title: "GauchoCourse",
      description:
        "A streamlined course enrollment system for students to find their best fit courses at UC Santa Barbara.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/207/215/datas/medium.png",
      tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      demoUrl: "https://devpost.com/software/gauchocourse",
      repoUrl: "https://github.com/example/pm-dashboard",
    },
    {
      title: "SlugLabs",
      description:
        "A web app that helps UCSC students find and apply to research labs that interest them.",
      image: "images/sluglabs.png",
      tags: ["Figma", "UI/UX", "Design System"],
      repoUrl:
        "https://github.com/LabConnectSlugAI/LabConnect/tree/main/labconnect",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeUp">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
