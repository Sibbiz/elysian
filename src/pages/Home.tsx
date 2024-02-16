/* eslint-disable prefer-const */
import logo from '@/assets/ElysianSnakeLogo.png';
import Heading from '@/components/base/header/Heading';
import { Button } from '@/components/ui/button';
import PosterCluster from '@/data/PosterCluster';
import { Card } from '@/layout/Card';
import { ContentContainer } from '@/layout/ContentContainer';
import { PageContainer } from '@/layout/PageContainer';

// Helper function to convert date from "DD.MM.YY" to "MM/DD/YYYY"
function convertDate(inputDate: string) {
  let [day, month, year] = inputDate.split('.');
  year = '20' + year;
  return new Date(`${month}/${day}/${year}`).getTime();
}

const Home = () => {
  const today = new Date().getTime();

  PosterCluster.sort((a, b) => {
    const dateA = convertDate(a.date);
    const dateB = convertDate(b.date);
    return Math.abs(today - dateA) - Math.abs(today - dateB);
  });

  const closestPoster = PosterCluster[0];

  if (closestPoster && convertDate(closestPoster.date) < today) {
    return null;
  }

  const nextPosters = PosterCluster.slice(1)
    .filter((poster) => convertDate(poster.date) >= today)
    .map((poster) => poster.image);

  const handleButtonClick = () => {
    window.location.href = 'https://fienta.com/no/elysian-x-offh';
  };

  return (
    <>
      <PageContainer>
        <ContentContainer>
          <img src={logo} alt='Elysian Logo' className='w-1/3 mx-auto' />
          <Card>
            <Heading headingLevel='h1' children='Next Event' className='text-center text-2xl' />
            <img src={closestPoster.image} alt='Next Event Poster' className='w-full rounded-lg' />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button className='text-lg bg-elysian-green' onClick={handleButtonClick}>
                Get Tickets Here
              </Button>
            </div>
          </Card>
          {nextPosters.length > 0 && (
            <Card>
              <Heading headingLevel='h1' children='Upcoming Events' className='text-center text-2xl' />
              {nextPosters.map((poster, index) => (
                <img key={index} src={poster} alt={`Upcoming Event Poster ${index}`} className='w-full rounded-lg' />
              ))}
            </Card>
          )}
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Home;
