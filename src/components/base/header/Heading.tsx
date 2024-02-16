import { ReactNode } from 'react';

type HeadingProps = {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: '';
};

const Heading: React.FC<HeadingProps> = ({ headingLevel, children, className }) => {
  const Heading = headingLevel;
  return <Heading className={className}>{children}</Heading>;
};
export default Heading;
