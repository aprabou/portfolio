import React from "react";
import { Github as GitHub, Linkedin, FileText, ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-12 lg:pb-20 lg:pt-32 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-amber-100 dark:bg-amber-700/20 rounded-tl-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 animate-fadeUp">
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="block">Ashwin Prabou</span>
                <span className="block mt-2 text-blue-600 dark:text-blue-400">
                  Software Engineer
                </span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
                Building innovative solutions with cutting-edge technologies to
                create impactful experiences that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 font-medium flex items-center gap-2 hover:gap-3"
                >
                  View Projects <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-300 font-medium flex items-center gap-2"
                >
                  Download CV <FileText className="h-4 w-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/ashwinprabou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <GitHub className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ashwinprabou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl flex items-center justify-center animate-float">
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                <img
                  src="/images/candid.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
