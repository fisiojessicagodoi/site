import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedServices from '../components/sections/FeaturedServices';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import LatestArticles from '../components/sections/LatestArticles';
import CTASection from '../components/sections/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <About />
      <Testimonials />
      <LatestArticles />
      <CTASection />
    </div>
  );
};

export default Home;