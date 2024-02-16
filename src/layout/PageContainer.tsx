import React, { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>{children}</div>;
};
