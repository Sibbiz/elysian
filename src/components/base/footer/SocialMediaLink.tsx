import React from 'react';

type SocialMediaLinkProps = {
  href: string;
  title: string;
  src: string;
  width?: string;
  height?: string;
};

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, title, src }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      <img src={src} alt={title} />
    </a>
  );
};

export default SocialMediaLink;
