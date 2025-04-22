import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
        {children}
        <span className="block h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mt-2"></span>
      </h2>
    </div>
  );
};