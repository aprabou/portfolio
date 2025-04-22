import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Code, Palette, Database, Cloud, Globe, Terminal, Server, Cpu } from 'lucide-react';

interface SkillProps {
  icon: React.ReactNode;
  name: string;
}

const SkillItem: React.FC<SkillProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <span className="text-gray-900 dark:text-white font-medium">{name}</span>
    </div>
  );
};

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: <Code className="h-5 w-5" />, name: "JavaScript" },
        { icon: <Code className="h-5 w-5" />, name: "TypeScript" },
        { icon: <Code className="h-5 w-5" />, name: "Python" },
        { icon: <Code className="h-5 w-5" />, name: "Java" },
        { icon: <Code className="h-5 w-5" />, name: "C/C++" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { icon: <Globe className="h-5 w-5" />, name: "React" },
        { icon: <Globe className="h-5 w-5" />, name: "Vue.js" },
        { icon: <Palette className="h-5 w-5" />, name: "Tailwind CSS" },
        { icon: <Globe className="h-5 w-5" />, name: "Next.js" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: <Server className="h-5 w-5" />, name: "Node.js" },
        { icon: <Server className="h-5 w-5" />, name: "Express" },
        { icon: <Terminal className="h-5 w-5" />, name: "GraphRAG" },
        { icon: <Cpu className="h-5 w-5" />, name: "Gen AI" }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { icon: <Database className="h-5 w-5" />, name: "MongoDB" },
        { icon: <Database className="h-5 w-5" />, name: "PostgreSQL" },
        { icon: <Cloud className="h-5 w-5" />, name: "AWS" },
        { icon: <Cloud className="h-5 w-5" />, name: "Docker" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <div className="mt-12 space-y-8 animate-fadeUp">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};