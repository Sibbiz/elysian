import React from 'react';
import somed_email from '../../../assets/somed_icons/email_white.png';
import somed_facebook from '../../../assets/somed_icons/facebook_white.png';
import somed_instagram from '../../../assets/somed_icons/instagram_white.png';
import somed_youtube from '../../../assets/somed_icons/youtube_white.png';
import '../../../css/styles.css';
import PageContainer from '../../layout/PageContainer';
import SocialMediaLink from './SocialMediaLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <PageContainer>
        <hr />
      </PageContainer>
      <div className="somed">
        <SocialMediaLink href="mailto:post@offh.no" title="Send email" src={somed_email} />
        <SocialMediaLink href="https://www.youtube.com/@OFFH2024" title="Link to our Youtube" src={somed_youtube} />
        <SocialMediaLink
          href="https://facebook.com/OneFloorFromHeaven"
          title="Link to our Facebook"
          src={somed_facebook}
        />
        <SocialMediaLink
          href="https://instagram.com/OneFloorFromHeaven"
          title="Link to our Instagram"
          src={somed_instagram}
        />
      </div>
      <div className="copyright">© One Floor From Heaven {currentYear}</div>
    </footer>
  );
};

export default Footer;
