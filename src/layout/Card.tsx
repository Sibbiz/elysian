import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  const cardClasses = `w-full border p-4 rounded-lg space-y-4 mb-4 ${className || ''}`;
  return <div className={cardClasses}>{children}</div>;
};
