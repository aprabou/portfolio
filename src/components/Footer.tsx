import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      url: "https://github.com/ashwinprabou",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      url: "https://linkedin.com/in/ashwinprabou",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      url: "aprabwork@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              Portfolio
            </a>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-400">
            &copy; {currentYear} Ashwin Prabou. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
