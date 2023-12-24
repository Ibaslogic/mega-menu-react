import Hero from '../components/hero/Hero';
import HeroContent from '../components/hero/HeroContent';
import HeroTitle from '../components/hero/HeroTitle';

import image from '../assets/images/home_banner.jpg';

const HomePage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={image}>
        <HeroTitle title="Home page hero title" />
      </HeroContent>
    </Hero>
  );
};

export default HomePage;
