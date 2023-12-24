import Hero from '../components/hero/Hero';
import HeroContent from '../components/hero/HeroContent';
import HeroTitle from '../components/hero/HeroTitle';

import image from '../assets/images/buy_banner.jpg';

const BuyPage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={image}>
        <HeroTitle title="The buy page hero title" />
      </HeroContent>
    </Hero>
  );
};

export default BuyPage;
