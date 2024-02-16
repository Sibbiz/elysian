import React, { ReactNode } from 'react';

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
};

export const ContentContainer: React.FC<ContentContainerProps> = ({ children, className }) => {
  const containerClasses = `flex flex-col items-center justify-center p-4 w-full ${className || ''}`;

  return <div className={containerClasses}>{children}</div>;
};
